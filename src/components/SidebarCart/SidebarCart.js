import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../SidebarCard/SidebarCard';
import { goToCart } from '../../redux/actions/actions';

function SidebarCart(props) {
    const { greatSum, goToCart } = props;
    return (
        <div className="px-4 pt-3 bg-dark position-fixed d-flex sidebar-cart text-white h-100 w-25 flex-column">
            <h3>Корзина</h3>
            <div className="d-flex justify-content-between mb-4">
                <div>Сумма пивка</div>
                <div>{greatSum}&#x20b8;</div>
            </div>
            <button onClick={() => goToCart()}className="btn btn-primary button-dark text-white mb-3">Перейти к тележке</button>
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
        addedToCart: store.addedToCart,
        greatSum: store.greatSum
    }
}

const mapDispatchToProps = {
    goToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);