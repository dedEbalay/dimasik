const initialState = {
    loading: true,
    menu: [],
    searchFilter: ''
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BEER_LIST_LOADED':
            return {
                ...state,
                loading: false,
                menu: action.payload
            };
        case 'SEARCH_BEER':
            return {
                ...state,
                searchFilter: action.payload
            }
        default: 
            return state
    }
};

export default reducer;