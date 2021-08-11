const initialState = {
    display: 'MAIN',
    loading: true,
    menu: [],
    searchFilter: '',
    sidebarCart: false,
    addedToCart: [],
    greatSum:0,
    currentMenuItem: localStorage.getItem("currentMenuItem")
};

const reducer = (state=initialState, action) => {
    function sliceThis(element, ...addedElement) {
        const beforeArr = state.addedToCart.slice(0, state.addedToCart.findIndex(item => item.id === element.id)),
              afterArr = state.addedToCart.slice(state.addedToCart.findIndex(item => item.id === element.id)+1),
              newArr = [...beforeArr, ...addedElement, ...afterArr];
        return newArr;
    };

    function createNewItem() {
        let newItem = state.addedToCart[state.addedToCart.findIndex(item => item.id === action.payload)];
        return newItem;
    };

    function getGreatSum(price, sum) {
        const newSum = price * sum;
        return newSum;
    };

    switch (action.type) {
        case 'GO_TO_CART':
            return {
                ...state,
                display: 'END_CART',
                sidebarCart: false
            }
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
                display: 'MAIN',
                loading: true
            }
        case 'OPEN_SIDEBAR':
            return {
                ...state,
                sidebarCart: !state.sidebarCart
            }
        case 'ADD_TO_CART':
            let newArr = state.addedToCart.map(item => item);
            let newItem = state.menu[state.menu.findIndex(item => item.id === action.payload)];
            newItem = {
                ...newItem,
                sum: 1,
                price: Math.floor(Math.random() * 10 - 2) + 10
            };
            if (state.addedToCart.filter(item => item.id === action.payload).length > 0) {
                let addedBeer = createNewItem();
                addedBeer = {...addedBeer, sum: addedBeer.sum + 1};
                return {
                    ...state,
                    sidebarCart: true,
                    addedToCart: sliceThis(addedBeer, addedBeer),
                    greatSum: state.greatSum + addedBeer.price
                }
            }
            newArr = [...newArr, newItem];
            return {
                ...state,
                sidebarCart: true,
                addedToCart: newArr,
                greatSum: state.greatSum + newItem.price
            }
        case 'REDUCE_CART':
            let newItem1 = createNewItem();
            newItem1 = {...newItem1, sum: newItem1.sum - 1}; 
            if (newItem1.sum < 1) {
                return {
                    ...state,
                    addedToCart: sliceThis(newItem1),
                    greatSum: state.greatSum - newItem1.price
                }
            }
            return {
                ...state,
                addedToCart: sliceThis(newItem1, newItem1),
                greatSum: state.greatSum - newItem1.price
            }
        case 'APPEND_CART':
            let newItem2 = createNewItem();
            newItem2 = {...newItem2, sum: newItem2.sum + 1};
            return {
                ...state,
                addedToCart: sliceThis(newItem2, newItem2),
                greatSum: state.greatSum + newItem2.price
            }
        case 'REMOVE_FROM_CART':
            let newItem3 = createNewItem();
            const beerSum = getGreatSum(newItem3.price, newItem3.sum)
            return {
                ...state,
                addedToCart: sliceThis(newItem3),
                greatSum: state.greatSum - beerSum
            }
        case 'GO_TO_MENU_ITEM':
            return {
                ...state,
                display: `MENU_ITEM_${action.payload}`
            }
        case 'CLEAR_SEARCH_FILTER':
            return {
                ...state,
                searchFilter: ''
            }
        default: 
            return state
    }
};

export default reducer;