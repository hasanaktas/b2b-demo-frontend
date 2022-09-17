import { useQuery } from '@tanstack/react-query'
import services from '@/services'

const useProducts = () => {
    return useQuery(['products'], services.products.getAll)
}

export default useProducts
