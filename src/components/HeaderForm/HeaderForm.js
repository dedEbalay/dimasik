import React, { useState } from "react";
import { connect } from 'react-redux';
import { searchBeer, goToMenu } from '../../redux/actions/actions';

function HeaderForm(props) {

    let [searchText, setSearchText] = useState(null);

    const { goToMenu, display } = props;

    function onChangeText(e) {
        const condition = e.target.value;
        setSearchText(searchText = condition);
        props.searchBeer(searchText);
    };

    return (
        <form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            goToMenu();
            console.log(display)
        }}>
            <input onChange={onChangeText} className="form-control me-2" type="search" placeholder="Найти пивчик" aria-label="Search" />
        </form>
    )
}

const mapStateToProps = (store) => {
    return {
        searchFilter: store.searchFilter,
        display: store.display
    }
}

const mapDispatchToProps = {
    searchBeer,
    goToMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);