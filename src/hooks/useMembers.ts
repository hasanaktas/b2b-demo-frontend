import { useQuery } from '@tanstack/react-query'
import services from '@/services'

const useMembers = () => {
    return useQuery(['members'], services.members.getAll)
}

export default useMembers
