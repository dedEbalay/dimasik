import React from 'react';
import { connect } from 'react-redux';
import HeaderFormListItem from '../HeaderFormListItem/HeaderFormListItem';

function HeaderFormList(props) {

    const { menu, searchFilter, display } = props;

    function searchPost(condition, lowerItems, items) {
        if (condition.length === 0) {
            return items
        } else {
            const filtredCondition = condition.toLowerCase();
            const filter = lowerItems.map(item => {
                if (item.indexOf(filtredCondition) > -1) {
                    return lowerItems.findIndex(elem => elem === item)
                }
                return null
            })
            const filtredFilter = filter.filter(item => item != null)
            return filtredFilter.map(item => {
                return items[item]
            })
        }
    }

    const lowerMenu = menu.map(item => item.name.toLowerCase());
    
    let visibleMenu = searchPost(searchFilter, lowerMenu ,menu);

    if (!searchFilter || visibleMenu.length < 1 || display === 'MENU') {
        return (
            <>
            </>
        )
    }

    return (
        <div className="header-form-container bg-white text-dark">
            <div className="header-form-list border border-dark border-2">
                {visibleMenu.map(item => {
                    return (
                        <HeaderFormListItem key={item.id} {...item} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        menu: store.menu,
        searchFilter: store.searchFilter,
        display: store.display
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFormList);