import React, {Component, PropTypes} from 'react'
import '../styles/app.scss'

import { Header } from './header.js'
import { MobileHeader } from './mobile_header.js'

//
export const App = ({
    children
}) => {
    return (
        <div className="flex">
            <Header />
            <MobileHeader />
            <main className="flex" role="main">
                {  children }
            </main>
            <div className="footer"></div>
        </div>
    )
}
