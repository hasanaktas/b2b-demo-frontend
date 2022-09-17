import * as React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import clsx from 'clsx'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true)

    return (
        <>
            <div className={clsx({ 'admin-layout-container': true, 'admin-layout-container-full': !sidebarOpen })}>
                <div className="admin-layout-page">{children}</div>
            </div>
            <Topbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={clsx({ 'admin-layout-sidebar': true, 'admin-layout-hide': !sidebarOpen })}>
                <Sidebar />
            </div>
        </>
    )
}

export default Layout
