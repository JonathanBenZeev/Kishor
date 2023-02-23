export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'



const initialState = {
    orders: []
}

export function orderReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_ORDERS:
            newState = { ...state, orders: action.orders || action.updatedOrders }
            break
        case ADD_ORDER:
            newState = { ...state, orders: [action.orderToAdd, ...newState.orders] }
            break
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
