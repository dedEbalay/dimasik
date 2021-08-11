import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';

function BuyBeerButton({ id , addToCart }) {
    return (
        <button onClick={() => addToCart(id)} className="spg spg-white spg-animate buy-beer-btn btn btn-dark beer-button bi bi-basket"> Купить пива!</button>
    )
}

// position-absolute

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyBeerButton);