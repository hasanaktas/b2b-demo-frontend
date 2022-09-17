import * as React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'
import Splash from '../splash'
type Props = {
    children: React.ReactNode
}
const GuestGuard = ({ children }: Props) => {
    const { data, isLoading } = useAuth()
    const router = useRouter()
    const [checked, setChecked] = React.useState<boolean>(false)
    const navigate = React.useCallback(() => {
        if (!router.isReady || isLoading) {
            return
        }
        if (data) {
            return router.replace('/')
        }
        setChecked(true)
    }, [data, router.isReady, isLoading])

    React.useEffect(() => {
        navigate()
    }, [navigate])

    if (isLoading || !checked) {
        return <Splash />
    }

    return <>{children}</>
}

export default GuestGuard
