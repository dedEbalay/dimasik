import React from 'react';

function SidebarCard(props) {
    const {name} = props;
    console.log(props)
    return (
        <div className="card bg-dark w-100 px-3">
            <div className="d-flex justify-content-between align-center">
                <h6 className="d-flex align-self-center">{name}</h6>
                <button className="btn btn-danger bi bi-trash"></button>
            </div>
            <div>
                <div>
                    <div>ЦЕНА</div>
                    <div>ЗА ШТУКУ</div>
                </div>
                <div>
                <button></button>
                <span></span>
                <button></button>
            </div>
            </div> 
        </div>
    )
}

export default SidebarCard;