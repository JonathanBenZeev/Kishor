export const SET_HOME = 'SET_HOME'
export const UPDATE_STAY = 'UPDATE_STAY'



const initialState = {
    stay: null
}

export function stayReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_HOME:
            newState = { ...state, stay: action.stay }
            break
        case UPDATE_STAY:
            newState = { ...state, stay: action.updatedStay }
            break


        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
