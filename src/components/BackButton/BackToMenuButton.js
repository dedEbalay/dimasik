import React from 'react';
import { Link } from 'react-router-dom';

function BackToMenuButton({ title }) {
    return (
        <Link to="/menu" className="btn btn-primary button-dark text-white back-to-menu-btn mx-2">{title}</Link>
    )
}

export default BackToMenuButton;