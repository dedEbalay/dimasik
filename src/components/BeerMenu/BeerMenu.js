import React, { useEffect } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import {connect} from 'react-redux';
import {beerListLoaded} from '../../redux/actions/actions';
import BeerListWrapper from '../BeerListWrapper/BeerListWrapper';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

export function BeerMenu(props) {

    const {beerList, beerListLoaded} = props

    useEffect(() => {
        beerList.getBeer()
            .then(res =>beerListLoaded(res));
    }, [beerListLoaded, beerList]);

    const {menu, loading} = props;

    if (loading) {
        return (
            <LoadSpinner />
        )
    }

    return (
        <div className="container beer-container">
            <div className="row justify-content-center">
                {
                    menu.map(item => {
                        return (        
                            <BeerCard key={item.id} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        menu: store.menu,
        loading: store.loading
    }
};

const mapDispatchToProps = {
    beerListLoaded
};

export default BeerListWrapper()(connect(mapStateToProps, mapDispatchToProps)(BeerMenu));