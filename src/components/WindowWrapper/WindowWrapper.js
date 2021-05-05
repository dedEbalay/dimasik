import React from 'react';
import { connect } from 'react-redux';
import BeerMenu from '../BeerMenu/BeerMenu'
import SidebarCart from '../SidebarCart/SidebarCart';

function WindowWrapper(props) {

    const {display, sidebarCart} = props;

    switch (display) {
        case 'MAIN':
                if (sidebarCart) {
                    return (
                        <>
                            <></>
                            <SidebarCart />
                        </>
                    )
                }
                return (
                    <></>
                )
        case 'MENU': 
                if (sidebarCart) {
                    return (
                        <>
                            <BeerMenu />
                            <SidebarCart />
                        </>
                    )
                }
                return (
                    <BeerMenu />
                )
        default:
            return (
                <>Ой вей, ви таки сломали тут все</>
            )
    };

};

const mapStateToProps = (store) => {
    return {
        display: store.display,
        sidebarCart: store.sidebarCart
    }
};

export default connect(mapStateToProps)(WindowWrapper);