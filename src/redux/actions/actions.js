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

export {
    beerListLoaded,
    searchBeer,
    goToMenu,
    goToMain,
    openSidebar,
    addToCart
}