import { api } from '@/utils'
import { ServiceResponse, Auth } from '@/types'

export const signIn = async ({ email, password }: { email: string; password: string }) => {
    const {
        data: { data },
    } = await api.post<ServiceResponse<Auth>>('/member/sign-in', { email, password })

    return data
}

export const get = async () => {
    const {
        data: { data },
    } = await api.get<ServiceResponse<Auth>>('/member')

    return data
}
