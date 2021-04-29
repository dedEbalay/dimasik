import React from 'react';
import loadSpinner from './loadSpinner.svg'

function LoadSpinner() {
    return (
        <div className="spinner d-flex justify-content-center">
            <img className="spinner-img" src={loadSpinner} alt="spinner"/>
        </div>
    )
}

export default LoadSpinner;