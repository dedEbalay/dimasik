import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import BeerListWrapper from '../BeerListWrapper/BeerListWrapper';
import { beerListLoaded } from '../../redux/actions/actions'

function MenuListItem(props) {

    const { menu, beerList, beerListLoaded } = props;

    useEffect(() => {
        beerList.getBeer()
            .then(res => beerListLoaded(res));
      }, [beerList, beerListLoaded]);
    
    console.log(menu)

    const menuItemId = menu.findIndex(item => item.id === +props.match.params.id)

    const menuItem = menu[menuItemId];

    if (menu.length < 1) {
        return (
            <LoadSpinner />
        )
    }

    const { name, image_url, description, abv, ibu, } = menuItem;
    
    return (
        <div className="menu-list__item-container container">
            <div className="menu-list__item-wrapper d-flex py-5 px-5 justify-content-between bg-white">
                <div className="menu-list__item-img-wrapper">
                    <img className="menu-list__item-img" src={image_url} alt={name}/>
                </div>
                <div className="menu-list__item-descr d-flex flex-column justify-content-between">
                    <h1 className="menu-list__item-descr__title">{name}</h1>
                    <div className="menu-list__item-descr__text">{description}</div>
                    <div className="menu-list__item-descr__about">
                        <div className="menu-list__item-descr__about__ibu">ГОРЕЧЬ В МЕЖДУНАРОДНОЙ ШКАЛЕ - {ibu}</div>
                        <div className="menu-list__item-descr__about__abv">КРЕПОСТЬ ПИВА - {abv}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        currentMenuItem: store.currentMenuItem,
        menu: store.menu
    }
}

const mapDispatchToProps = {
    beerListLoaded
}

export default BeerListWrapper()(connect(mapStateToProps, mapDispatchToProps)(MenuListItem));