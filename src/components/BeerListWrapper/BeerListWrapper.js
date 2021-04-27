import React from 'react';
import BeerListContext from '../BeerListContext/BeerListContext';

const BeerListWrapper = () => (WrappedComponent) => {
    return (props) => {
        return (
            <BeerListContext.Consumer>
                {
                    (beerList) => {
                        return <WrappedComponent {...props} beerList={beerList}/>
                    }
                }
            </BeerListContext.Consumer>
        )
    }
}

export default BeerListWrapper;