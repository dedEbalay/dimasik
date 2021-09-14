import React from 'react';
import { connect } from 'react-redux';
import { reduceCart,appendCart,removeFromCart } from '../../redux/actions/actions';

function EndCartCard(props) {
    const {name, tagline, sum, price, id, appendCart, removeFromCart, reduceCart} = props;
    return (
        <div className="d-flex end-cart-card px-2 py-2 align-middle w-100">
            <div className="w-100 d-flex">
                <div className="card-img-container d-flex col-md-4">
                    <img className="end-cart-img justify-content-center" src={props.image_url} alt="Пивчик" />
                </div>
                <div className="card-body">
                    <p className="card-text">{name} <br /> {tagline}</p>
                </div>
            </div>
            <div className="w-25 align-middle price-card">
                <div className="d-flex justify-content-between mb-3">
                    <h3>{sum * price}&#x20b8;</h3>
                    <button onClick={() => removeFromCart(id)}className="end-cart-card__button btn btn-danger bi bi-trash"></button>
                </div>
                <div className="d-flex justify-content-between w-100">
                    <button onClick={() => reduceCart(id)}className="end-cart-card__button btn btn-dark">-</button>
                    <p>{sum}</p>
                    <button onClick={() => appendCart(id)}className="end-cart-card__button btn btn-dark">+</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = {
    reduceCart,
    appendCart,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(EndCartCard);