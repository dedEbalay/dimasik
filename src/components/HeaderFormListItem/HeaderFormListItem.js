import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToMenuItem, clearSearchFilter } from '../../redux/actions/actions';

function HeaderFormListItem(props) {

    const { image_url, name, goToMenuItem, id, clearSearchFilter } = props;

    // function clearForm() {
        
    // }

    return (
        <div className="header-form-list__item">
            <Link 
            to={{pathname: `/menu/item/${id}`}}
            onClick={() => {
                goToMenuItem(id);
                document.querySelector('.header-form').reset();
                clearSearchFilter();
            }}
            className="header-form-list__item-link d-flex align-items-center px-2 py-1"
            >
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
    goToMenuItem,
    clearSearchFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFormListItem);