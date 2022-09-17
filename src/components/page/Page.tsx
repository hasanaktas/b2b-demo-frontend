import * as React from 'react'
import { Container, Spinner } from 'react-bootstrap'

type Props = {
    children: React.ReactNode
    loading?: boolean
}

const Page = ({ children, loading }: Props) => {
    return (
        <main className="py-4 position-relative flex-grow-1 ">
            <Container>{children}</Container>
            {loading && (
                <div className="position-absolute top-0 start-0 end-0 bottom-0  d-flex justify-content-center align-items-center">
                    <div className="w-100 h-100 bg-white position-absolute opacity-50" />
                    <div className="bg-white p-4 rounded-3 shadow-sm " style={{ zIndex: 1 }}>
                        <Spinner animation="border" className="text-primary" />
                    </div>
                </div>
            )}
        </main>
    )
}

export default Page
