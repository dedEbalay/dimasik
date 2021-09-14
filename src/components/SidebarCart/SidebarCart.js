import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../SidebarCard/SidebarCard';
import { goToCart } from '../../redux/actions/actions';
import { NavLink } from 'react-router-dom';

function SidebarCart(props) {
    const { greatSum, goToCart, sidebarCart } = props;

    if (sidebarCart) {
        return (
            <div className="px-4 pt-3 position-fixed d-flex sidebar-cart h-100 w-25 flex-column">
                <h3>Корзина</h3>
                <div className="d-flex justify-content-between mb-4">
                    <div>Сумма пивка</div>
                    <div>{greatSum}&#x20b8;</div>
                </div>
                <NavLink to="/cart">
                    <button onClick={() => goToCart()}className="btn mb-3">Перейти к тележке</button>
                </NavLink>
                {props.addedToCart.map(item => {
                    return (
                        <SidebarCard key={item.id} {...item}/>
                    )
                })}
            </div>
        )
    } 
    return (
        <>
        </>
    )
    
}

const mapStateToProps = (store) => {
    return {
        addedToCart: store.addedToCart,
        greatSum: store.greatSum,
        sidebarCart: store.sidebarCart
    }
}

const mapDispatchToProps = {
    goToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);