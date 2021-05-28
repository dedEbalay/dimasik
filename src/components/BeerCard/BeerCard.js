import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, currentMenuItem } from '../../redux/actions/actions';

function BeerCard(props) {

    const { id, name, image_url, description, addToCart, currentMenuItem } = props;

    return (
        <div className="w-80 card mb-4"
        >
            <div className="row g-0">
                <Link
                to={{pathname: `/menu/item/${id}`}}
                onClick={() => currentMenuItem(id)}
                className="col-md-4"
                >
                    <img className="card-img"src={image_url} alt="Пивчик" />
                </Link>
                <div className="col-md-8">
                    <div className="card-body position-relative h-100">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <button onClick={() => addToCart(id)} className="position-absolute btn btn-dark beer-button bi bi-basket"></button>
                    </div>
                </div>
            </div>
        </div>    
    )
}

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = {
    addToCart,
    currentMenuItem
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);