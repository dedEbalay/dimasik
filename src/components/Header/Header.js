import React from 'react';
import HeaderForm from '../HeaderForm/HeaderForm';
import logo from '../../img/logo.svg';
import { goToMenu, goToMain, openSidebar } from '../../redux/actions/actions';
import { connect } from 'react-redux';

function Header(props) {
    return (
        <nav className="position-fixed navbar navbar-expand-lg navbar-dark bg-dark w-100 header">
            <div className="container">
                <div className="navbar-brand">
                    <img onClick={() => props.goToMain()} className="logo" src={logo} alt="logo"/>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto justify-content-between mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div onClick={() => props.goToMenu()} className="nav-link active" aria-current="page" href="#">Пивбаза</div>
                        </li>
                        <button onClick={() => props.openSidebar()} className="btn btn-dark bg-dark">
                            <span className="bi bi-basket">   Затаренное пивко</span>
                        </button>
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

const mapStateToProps = (store) => {
    return {
        display: store.display,
        sidebar: store.sidebarCart
    }
}

const mapDispatchToProps = {
    goToMenu,
    goToMain,
    openSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);