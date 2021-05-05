import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../SidebarCard/SidebarCard';

function SidebarCart(props) {
    return (
        <div className="px-4 pt-3 bg-dark position-fixed d-flex sidebar-cart text-white h-100 w-25 flex-column">
            <h3>Корзина</h3>
            <div className="d-flex justify-content-between mb-4">
                <div>Сумма пивка</div>
                <div>40 гривен</div>
            </div>
            <button className="btn btn-primary button-dark text-white mb-3">Перейти к тележке</button>
            <hr color=""/>
            {props.addedToCart.map(item => {
                return (
                    <SidebarCard key={item.id} {...item}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        addedToCart: store.addedToCart
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);