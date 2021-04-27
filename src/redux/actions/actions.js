const beerListLoaded = (data) => {
    return {
        type: 'BEER_LIST_LOADED',
        payload: data
    }
};

export {
    beerListLoaded
}