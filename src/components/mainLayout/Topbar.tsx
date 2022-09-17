import { useTranslation } from '@/hooks'
import * as React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Topbar = () => {
    const { t } = useTranslation()
    const sections = React.useMemo<string[]>(() => [t.common.fashion, t.common.electronic, t.common.living], [t])

    return (
        <Navbar bg="primary" variant="dark" className="d-flex flex-column pb-0  border-bottom  ">
            <Container className="d-flex justify-content-center align-items-center text-white" style={{ height: 40 }}>
                <span className="mb-2"> B2B App</span>
            </Container>
            <div
                className="bg-white d-flex justify-content-center align-items-center gap-2"
                style={{ height: 50, width: '100%' }}
            >
                {sections.map((section) => (
                    <button className="btn btn-light" key={section}>
                        {section}
                    </button>
                ))}
            </div>
        </Navbar>
    )
}

export default Topbar
