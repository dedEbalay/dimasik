import React from 'react';

function BeerCard(props) {
    return (
        <div className="w-80 card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="card-img"src={props.image_url} alt="Пивчик" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default BeerCard;