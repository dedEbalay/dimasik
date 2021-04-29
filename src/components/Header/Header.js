import React from 'react';
import HeaderForm from '../HeaderForm/HeaderForm'
import logo from '../../img/logo.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link active" aria-current="page" href="#">Пивбаза</div>
                        </li>
                        <li className="nav-item">
                         <div className="nav-link" href="#">Link</div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Связь
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><div className="dropdown-item" href="#">Action</div></li>
                                <li><div className="dropdown-item" href="#">Another action</div></li>
                                <li><div className="dropdown-item" href="#">Something else here</div></li>
                            </ul>
                        </li>
                    </ul>
                    <HeaderForm />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Header;