import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SSRProvider } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import '@/styles/index.scss'
import { ExtendedAppProps } from '@/types'
import { queryClientConfig } from '@/configs'

function MyApp({ pageProps, Component }: ExtendedAppProps) {
    const [queryClient] = React.useState(() => new QueryClient(queryClientConfig))
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                {getLayout(
                    <SSRProvider>
                        <Component {...pageProps} />
                        <ToastContainer autoClose={1000} theme="colored" />
                    </SSRProvider>
                )}
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
