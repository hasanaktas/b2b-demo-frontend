import { UseStateDispatcher } from '@/types'
import { Container, Navbar } from 'react-bootstrap'
import { Menu as MenuIcon } from 'react-feather'
import clsx from 'clsx'
type Props = {
    sidebarOpen: boolean
    setSidebarOpen: UseStateDispatcher<boolean>
}

const Topbar = ({ setSidebarOpen, sidebarOpen }: Props) => {
    return (
        <Navbar
            bg="primary"
            variant="dark"
            className={clsx({ 'admin-layout-topbar': true, 'admin-layout-topbar-full': !sidebarOpen })}
        >
            <Container className="d-flex text-white  justify-content-center align-items-center position-relative">
                B2B Admin
                <div
                    className="btn bg-white position-absolute end-0 me-4 rounded-circle text-primary d-flex justify-content-center align-items-center "
                    style={{ width: 40, height: 40 }}
                    onClick={() => setSidebarOpen((prev) => !prev)}
                >
                    <MenuIcon />
                </div>
            </Container>
        </Navbar>
    )
}

export default Topbar
