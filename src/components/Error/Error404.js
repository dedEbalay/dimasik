import React from 'react';

function Error404() {
    return (
        <div className="error-card text-center">
            <div className="card-body">
                <h5 className="card-title">Что-то пошло не так</h5>
                <p className="card-text">Похоже, страница которую вы ищите не существует</p>
            </div>
        </div>
    )
}

export default Error404;