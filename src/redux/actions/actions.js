const beerListLoaded = (newMenu) => {
    return {
        type: 'BEER_LIST_LOADED',
        payload: newMenu
    }
};

const searchBeer = (text) => {
    return {
        type: 'SEARCH_BEER',
        payload: text
    }
}

const goToMenu = () => {
    return {
        type: 'GO_TO_MENU'
    }
}

const goToMain = () => {
    return {
        type: 'GO_TO_MAIN'
    }
}

const openSidebar = () => {
    return {
        type: 'OPEN_SIDEBAR'
    }
}

const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

const reduceCart = (id) => {
    return {
        type: 'REDUCE_CART',
        payload: id
    }
}

const appendCart = (id) => {
    return {
        type: 'APPEND_CART',
        payload: id
    }
}

const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

const goToCart = () => {
    return {
        type: 'GO_TO_CART'
    }
}

const goToMenuItem = (id) => {
    return {
        type: 'GO_TO_MENU_ITEM',
        payload: id
    }
}

const clearSearchFilter = () => {
    return {
        type: 'CLEAR_SEARCH_FILTER'
    }
}


export {
    goToCart,
    reduceCart,
    appendCart,
    removeFromCart,
    beerListLoaded,
    searchBeer,
    goToMenu,
    goToMain,
    openSidebar,
    addToCart,
    goToMenuItem,
    clearSearchFilter
}