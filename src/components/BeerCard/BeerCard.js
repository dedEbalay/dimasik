import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';

function BeerCard(props) {
    return (
        <div className="w-80 card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="card-img"src={props.image_url} alt="Пивчик" />
                </div>
                <div className="col-md-8">
                    <div className="card-body position-relative h-100">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <button onClick={() => props.addToCart(props.id)} className="position-absolute btn btn-dark beer-button bi bi-basket"></button>
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
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);