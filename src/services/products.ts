import { api } from '@/utils'
import { ServiceResponse, Product } from '@/types'

export const getAll = async () => {
    const {
        data: { data },
    } = await api.get<ServiceResponse<Product[]>>('/products')

    return data
}

export const getSimilar = async ({ id }: { id: string }) => {
    const {
        data: { data },
    } = await api.get<ServiceResponse<Product[]>>(`/similiar-products/${id}`)

    return data
}

export const get = async ({ id }: { id: string }) => {
    const {
        data: { data },
    } = await api.get<ServiceResponse<Product>>(`/products/${id}`)

    return data
}
