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

export {
    beerListLoaded,
    searchBeer
}