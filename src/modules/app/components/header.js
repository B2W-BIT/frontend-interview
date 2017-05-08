import React, {Component, PropTypes} from 'react'
import '../styles/header.scss'


export const Header = ({
    profile = {},
    fetching = false,
    fetched = false,
    error = null,
    children,
}) => {
    return (
        <header className="hidden-sm hidden-xs">
            <div className="custom-nav">
                <div className="custom-nav__inner">
                    <div className="container">
                        <div className='pull-left'>
                            <a href='#'> <span className='Icon -bird'></span> Home</a>
                            <a href='#'> <span className='Icon -raio'> </span>Moments </a>
                        </div>
                        <div className='pull-right'>
                            <input className='search' type='text' name='search' placeholder='Buscar' />
                            <span className="login caret">Você possui uma conta? Entrar.</span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
