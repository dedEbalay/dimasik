import React from 'react';
import { connect } from 'react-redux';
import { reduceCart,appendCart,removeFromCart } from '../../redux/actions/actions';

function EndCartCard(props) {
    const {name, tagline, sum, price, id, appendCart, removeFromCart, reduceCart} = props;
    console.log(props)
    return (
        <div className="d-flex end-cart-card px-2 py-2 align-middle">
            <div className="w-75 d-flex justify-content-between">
                <img className="end-cart-img justify-content-center" src={props.image_url} alt="Пивчик" />
                <p className="w-75 align-middle">{name} <br /> {tagline}</p>
            </div>
            <div className="w-25 align-middle">
                <div className="d-flex justify-content-between">
                    <h3>{sum * price}&#x20b8;</h3>
                    <button onClick={() => removeFromCart(id)}className="btn bi bi-trash"></button>
                </div>
                <div className="d-flex justify-content-between w-100">
                    <button onClick={() => reduceCart(id)}className="btn btn-dark">-</button>
                    <p>{sum}</p>
                    <button onClick={() => appendCart(id)}className="btn btn-dark">+</button>
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