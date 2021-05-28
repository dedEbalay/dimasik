import React, { useEffect } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import {connect} from 'react-redux';
import {beerListLoaded} from '../../redux/actions/actions';
import BeerListWrapper from '../BeerListWrapper/BeerListWrapper';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

export function BeerMenu(props) {

    const {beerList, beerListLoaded, searchFilter} = props;

    useEffect(() => {
        beerList.getBeer()
            .then(res =>beerListLoaded(res));
    }, [beerListLoaded, beerList]);

    const {menu, loading} = props;

    function searchPost(condition, lowerItems, items) {
        if (condition.length === 0) {
            return items
        } else {
            const filtredCondition = condition.toLowerCase();
            const filter = lowerItems.map(item => {
                if (item.indexOf(filtredCondition) > -1) {
                    return lowerItems.findIndex(elem => elem === item)
                }
                return null
            })
            const filtredFilter = filter.filter(item => item != null)
            return filtredFilter.map(item => {
                return items[item]
            })
        }
    }

    const lowerMenu = menu.map(item => item.name.toLowerCase());
    
    let visibleMenu = searchPost(searchFilter, lowerMenu ,menu);

    if (loading) {
        return (
            <LoadSpinner />
        )
    }

    if (visibleMenu.length < 1) {
        return (
            <div className="container beer-container">
            <div className="row justify-content-center">
                <h2>Похоже поиск не дал результатов :(</h2>
            </div>
        </div>
        )
    }

    return (
        <div className="container beer-container">
            <div className="row justify-content-center">
                {
                    visibleMenu.map(item => {
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
        loading: store.loading,
        searchFilter: store.searchFilter
    }
};

const mapDispatchToProps = {
    beerListLoaded
};

export default BeerListWrapper()(connect(mapStateToProps, mapDispatchToProps)(BeerMenu));