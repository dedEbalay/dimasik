import React from 'react';
import { connect } from 'react-redux';
import { reduceCart, appendCart, removeFromCart } from '../../redux/actions/actions';

function SidebarCard(props) {
    const {price, name, sum, reduceCart, appendCart, removeFromCart, id} = props;

    return (
        <div className="card bg-dark w-100 px-3">
            <div className="d-flex justify-content-between align-center">
                <h6 className="d-flex align-self-center">{name}</h6>
                <button onClick={() => removeFromCart(id)}className="btn btn-danger bi bi-trash"></button>
            </div>
            <div>
                <div className="d-flex">
                    <p>ЦЕНА</p>
                    <p>ЗА ШТУКУ</p>
                    <p>{price}</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary btn-sm"onClick={() => reduceCart(id)}>-</button>
                    <span className="d-flex price w-25 justify-content-center">{sum}</span>
                    <button className="btn btn-primary btn-sm"onClick={() => appendCart(id)}>+</button>
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        addedToCart: store.addedToCart
    }
}

const mapDispatchToProps = {
    reduceCart,
    appendCart, 
    removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarCard);