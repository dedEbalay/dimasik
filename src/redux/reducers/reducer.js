const initialState = {
    display: 'MAIN',
    loading: true,
    menu: [],
    searchFilter: '',
    sidebarCart: false,
    addedToCart: []
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
        case 'GO_TO_MENU':
            return {
                ...state,
                display: 'MENU'
            }
        case 'GO_TO_MAIN':
            return {
                ...state,
                display: 'MAIN'
            }
        case 'OPEN_SIDEBAR':
            return {
                ...state,
                sidebarCart: !state.sidebarCart
            }
        case 'ADD_TO_CART':
            let newArr = state.addedToCart.map(item => item);
            const newItem = state.menu[action.payload];
            newArr = [...newArr, newItem];
            return {
                ...state,
                addedToCart: newArr
            }
        default: 
            return state
    }
};

export default reducer;