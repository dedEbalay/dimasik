import React from 'react';
import loadSpinner from './loadSpinner.svg'

function LoadSpinner() {
    return (
        <div className="spinner d-flex justify-content-center center-component">
            <img className="spinner-img" src={loadSpinner} alt="spinner"/>
        </div>
    )
}

export default LoadSpinner;