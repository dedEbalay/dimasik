import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToMenu } from '../../redux/actions/actions';

function HeaderFormListItem(props) {

    const { image_url, name, goToMenu } = props;

    return (
        <div className="header-form-list__item">
            <Link onClick={() => {
                goToMenu(); 
            }} className="header-form-list__item-link d-flex align-items-center px-2 py-1" to="/menu">
                <img className="header-form-list__item-img" src={image_url} alt="пивчик(вставить props.title)" />
                <div className="header-form-list__item-text">{name}</div>
            </Link>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = {
    goToMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFormListItem);