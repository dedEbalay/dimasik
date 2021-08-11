import React from 'react';
import BuyBeerButton from '../BuyBeerButton/BuyBeerButton';
import { Link } from 'react-router-dom';

function BeerCard(props) {

    const { id, name, image_url, description} = props;

    return (
        <div className="w-80 card mb-4">
            <div className="row g-0">
                <Link
                to={{pathname: `/menu/item/${id}`}}
                className="col-md-4"
                >
                    <img className="card-img"src={image_url} alt="Пивчик" />
                </Link>
                <div className="col-md-8">
                    <div className="card-body position-relative h-100">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <BuyBeerButton id={id} />
                    </div>
                </div>
            </div>
        </div>    
    )
}



export default BeerCard;