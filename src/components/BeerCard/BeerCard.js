import React from 'react';

const BeerCard = () => {
    return (
            <div className="w-25 p-3">
                <div className="card" >
                    <img src="..." class="card-img-top" alt="Пивко-лого" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div href="#" className="btn btn-dark">Go somewhere</div>
                    </div>
                </div>    
            </div>
    )
}

export default BeerCard;