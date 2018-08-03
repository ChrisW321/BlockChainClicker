const initialState = {
    blockData: [{name:'Bitcoin', price: 7000, rate: 100}, {name:'Dogecoin', price: 10, rate: .5, icon:'.././images/dogeIcon.png'}],
    cash: 0,
    rate: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_COIN':
            return Object.assign({}, state, {
                cash: state.cash + action.cash,
                rate: state.rate + action.rate
            })
        case 'UPDATE_CASH':
            return Object.assign({}, state, {
                cash: state.cash + state.rate
            })
        default:
            return state;
        }
}

export default reducer;