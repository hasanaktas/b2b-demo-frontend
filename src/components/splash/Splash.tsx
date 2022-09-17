import * as React from 'react'
import { Spinner } from 'react-bootstrap'
import Brand from '../brand'

const Splash = () => {
    return (
        <div className="flex-grow-1 d-flex justify-content-center align-items-center gap-4">
            <Brand />
            <div style={{ height: 80, width: 1 }} className="bg-dark bg-opacity-50 " />
            <Spinner animation="border" className="text-primary" />
        </div>
    )
}

export default Splash
