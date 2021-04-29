const beerListLoaded = (newMenu) => {
    return {
        type: 'BEER_LIST_LOADED',
        payload: newMenu
    }
};

export {
    beerListLoaded
}