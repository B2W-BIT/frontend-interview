import React, {Component, PropTypes} from 'react'
import '../styles/mobile_header.scss'


export const MobileHeader = ({}) => {
    return (
        <header className="mobile-header hidden-lg hidden-md flex" role="banner">
            <div className="flex">
                <div className="mobile-header__icons-row mobile-header__row flex">
                    <div className="mobile-header__row-content flex">
                        <div className="mobile-header__row-align flex">
                            <div className="mobile-header__icon -icon-left flex">
                            <i className="Icon -bird flex"></i>
                            </div>
                            <div className="mobile-header__spacing"></div>
                            <div className="mobile-header__icon -icon-right flex">
                            <i className="Icon -search flex"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-header__row flex">
                    <div className="mobile-header__row-content flex -bottom">
                        <div className="mobile-header__row-align flex">
                            <div className="mobile-header__btn-wrapper flex">
                                <div className="flex-row flex">
                                    <div className="mobile-header__btn flex">
                                        <button className="btn btn-default -primary">Inscrever-se</button>
                                    </div>
                                    <div className="mobile-header__btn flex">
                                        <button className="btn btn-default">Entrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
