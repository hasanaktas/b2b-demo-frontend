import * as React from 'react'
import Footer from './Footer'

import Topbar from './Topbar'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Topbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
