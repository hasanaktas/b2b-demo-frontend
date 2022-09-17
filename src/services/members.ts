import { api } from '@/utils'
import { ServiceResponse, Member } from '@/types'

export const getAll = async () => {
    const {
        data: { data },
    } = await api.get<ServiceResponse<Member[]>>('/members')

    return data
}
