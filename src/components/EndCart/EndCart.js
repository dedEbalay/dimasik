import React from 'react';
import { connect } from 'react-redux';
import EndCartCard from '../EndCartCard/EndCartCard';
import BackToMenuButton from '../BackButton/BackToMenuButton';

function EndCart(props) {
    const {addedToCart} = props;

    const btnTitle = "Купите пива, не совершайте ошибку!";

    if (addedToCart.length === 0) {
        return (
            <div className="end-cart container center-component">
                <h1 className="pb-5">Вы пока ничего не купили</h1>
                <BackToMenuButton title={btnTitle} />
            </div>
        )
    }

    return (
        <div className="end-cart container center-component">
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