import { useQuery } from '@tanstack/react-query'
import services from '@/services'

const useProduct = (id?: string) => {
    return useQuery(
        ['products', id],
        () => (typeof id === 'string' ? services.products.get({ id }) : Promise.reject()),
        {
            enabled: typeof id === 'string',
            onError: () => {
                return
            },
        }
    )
}

export default useProduct
