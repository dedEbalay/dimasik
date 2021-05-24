import React from 'react';
import beerDay from '../../img/beerDay.jpg';
import beerDay2 from '../../img/beerDay2.jpg';

function Main() {
    return (
        <div className="d-flex main-container">
            <img className="w-50" src={beerDay} alt="С днем пива"></img>
            <img className="w-50" src={beerDay2} alt="С днем пива 2"></img>
        </div>
    )
}

export default Main;