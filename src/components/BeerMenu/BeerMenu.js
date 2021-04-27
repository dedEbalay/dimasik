import React, {Component} from 'react';
import BeerCard from '../BeerCard/BeerCard';
import {connect} from 'react-redux';
// import {beerListLoaded} from '../../redux/actions/actions';
import BeerListWrapper from '../BeerListWrapper/BeerListWrapper';

export class BeerMenu extends Component {

    componentDidMount() {
        const {beerList} = this.props;
        beerList.getBeer()
            .then(res=>this.props.beerListLoaded(res));
        console.log('Компонент дид маунт')
    }

    render() {
        
        const {menu} = this.props;
        
        console.log(menu)

        return (
            <div className="container beer-container">
                <div className="row">
                    <BeerCard />
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        menu: store.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        beerListLoaded: (newMenu) => {
            dispatch({
                type: 'BEER_LIST_LOADED',
                payload: newMenu
            })
        }
    }
}

export default BeerListWrapper()(connect(mapStateToProps, mapDispatchToProps)(BeerMenu));