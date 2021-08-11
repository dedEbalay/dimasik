import React from 'react';
import HeaderForm from '../HeaderForm/HeaderForm';
import logo from '../../img/logo.svg';
import { goToMenu, goToMain, openSidebar } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 header">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">
                        <img onClick={() => props.goToMain()} className="logo" src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto justify-content-between mb-2 mb-lg-0">
                        <button className="btn btn-dark bg-dark">
                            <Link to="/menu" onClick={() => props.goToMenu()} className="nav-link active" aria-current="page" href="#">Пивбаза</Link>
                        </button>
                        <button onClick={() => props.openSidebar()} className="btn btn-dark bg-dark">
                            <span className="bi bi-basket">   Затаренное пивко</span>
                        </button>
                    </ul>
                    <HeaderForm />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
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