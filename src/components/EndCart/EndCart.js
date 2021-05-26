import React from 'react';
import { connect } from 'react-redux';
import EndCartCard from '../EndCartCard/EndCartCard';

function EndCart(props) {
    const {addedToCart} = props;
    return (
        <div className="end-cart container">
            <h1 className="pb-5">Корзина</h1>
            <div className="h-100">
                <h2>Список товаров</h2>
                {addedToCart.map(item => {
                    return (
                        <EndCartCard key={item.id }{...item}/>
                    )  
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        addedToCart: store.addedToCart
    }
}

export default connect(mapStateToProps)(EndCart);