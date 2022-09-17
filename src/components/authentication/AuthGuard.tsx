import * as React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'
import { ApiError } from '@/utils'
import Splash from '../splash'
type Props = {
    children: React.ReactNode
}
const AuthGuard = ({ children }: Props) => {
    const { data, isLoading, error, status } = useAuth()
    const router = useRouter()
    const [checked, setChecked] = React.useState<boolean>(false)
    const navigate = React.useCallback(() => {
        if (!router.isReady || status === 'loading') {
            return
        }

        if ((error instanceof ApiError && error.httpStatus === 401) || (status === 'success' && !data)) {
            return router.push('/sign-in')
        }
        setChecked(true)
    }, [data, error, router.isReady, status])

    React.useEffect(() => {
        navigate()
    }, [navigate])

    if (status === 'loading' || !checked) {
        return <Splash />
    }

    return <>{children}</>
}

export default AuthGuard
