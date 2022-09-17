import { useQuery } from '@tanstack/react-query'
import services from '@/services'

const useSimilarProducts = (id?: string) => {
    return useQuery(
        ['similiar-products', id],
        () => (typeof id === 'string' ? services.products.getSimilar({ id }) : Promise.reject()),
        {
            enabled: typeof id === 'string',
            onError: () => {
                return
            },
        }
    )
}

export default useSimilarProducts
