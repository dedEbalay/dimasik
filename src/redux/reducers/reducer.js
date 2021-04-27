const initialState = {
    loading: true,
    menu: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BEER_LIST_LOADED':
            console.log('Успех!')
            return {
                ...state,
                loading: false,
                menu: action.payload
            };
        default: 
            return state
    }
};

export default reducer;