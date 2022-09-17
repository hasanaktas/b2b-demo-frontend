import * as React from 'react'
import Footer from './Footer'

import Topbar from './Topbar'

type Props = {
    children: React.ReactNode
    disableNavigation?: boolean
}

const Layout = ({ children, disableNavigation }: Props) => {
    return (
        <>
            <Topbar disableNavigation={disableNavigation} />
            {children}
            <Footer />
        </>
    )
}

export default Layout
