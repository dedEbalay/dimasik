import React, { useState } from "react";
import { connect } from 'react-redux';
import { searchBeer, goToMenu } from '../../redux/actions/actions';
import HeaderFormList from '../HeaderFormList/HeaderFormList';

function HeaderForm(props) {

    let [searchText, setSearchText] = useState(null);

    function onChangeText(e) {
        const condition = e.target.value;
        setSearchText(searchText = condition);
        props.searchBeer(searchText);
    };

    return (
        <>
            <form className="d-flex flex-column p-relative" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input onChange={onChangeText} className="form-control me-2" type="search" placeholder="Найти пивчик" aria-label="Search" />
                <HeaderFormList />
            </form>
        </>
    )
}

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = {
    searchBeer,
    goToMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);