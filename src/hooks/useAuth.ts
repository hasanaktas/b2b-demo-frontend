import { useQuery } from '@tanstack/react-query'
import services from '@/services'
import { ApiError } from '@/utils'
import { toast } from 'react-toastify'

const useAuth = () => {
    return useQuery(['auth'], services.auth.get, {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retryOnMount: false,
        onError: (err) => {
            if (err instanceof ApiError) {
                if (err.httpStatus === 401) return
                toast(err.message, { type: 'error' })
            } else {
                toast('Error Account Request', { type: 'error' })
            }
        },
    })
}

export default useAuth
