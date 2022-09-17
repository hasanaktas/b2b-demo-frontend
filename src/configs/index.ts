import { createApiErrorToast } from '@/utils/common'
import { QueryClientConfig } from '@tanstack/react-query'

export const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: 0,
            // refetchOnMount: false,
            refetchOnWindowFocus: false,
            // staleTime: Infinity,
            onError: createApiErrorToast,
        },
        mutations: {
            onError: createApiErrorToast,
        },
    },
}
