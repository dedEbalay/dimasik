import React, { useState } from "react";
import { connect } from 'react-redux';
import { searchBeer } from '../../redux/actions/actions';

function HeaderForm(props) {

    let [searchText, setSearchText] = useState(null);

    function onChangeText(e) {
        const condition = e.target.value;
        setSearchText(searchText = condition);
        props.searchBeer(searchText);
    };

    return (
        <form className="d-flex">
            <input onChange={onChangeText} className="form-control me-2" type="search" placeholder="Найти пивчик" aria-label="Search" />
        </form>
    )
}

const mapStateToProps = (store) => {
    return {
        searchFilter: store.searchFilter
    }
}

const mapDispatchToProps = {
    searchBeer
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);