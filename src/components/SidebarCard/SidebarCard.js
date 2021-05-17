import React from 'react';
import { connect } from 'react-redux';
import { reduceCart, appendCart, removeFromCart } from '../../redux/actions/actions';

function SidebarCard(props) {
    const {name, sum, reduceCart, appendCart, removeFromCart, id} = props;

    return (
        <div className="card bg-dark w-100 px-3">
            <div className="d-flex justify-content-between align-center">
                <h6 className="d-flex align-self-center">{name}</h6>
                <button onClick={() => removeFromCart(id)}className="btn btn-danger bi bi-trash"></button>
            </div>
            <div>
                <div>
                    <div>ЦЕНА</div>
                    <div>ЗА ШТУКУ</div>
                </div>
                <div>
                <button onClick={() => reduceCart(id)}>-</button>
                <span>{sum}</span>
                <button onClick={() => appendCart(id)}>+</button>
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