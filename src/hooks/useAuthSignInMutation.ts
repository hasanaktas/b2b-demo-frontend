import services from '@/services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useAuthSignInMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(services.auth.signIn, {
        onSuccess: async (data) => {
            localStorage.setItem('token', data.authToken)
            queryClient.setQueryData(['auth'], data)
        },
    })
}

export default useAuthSignInMutation
