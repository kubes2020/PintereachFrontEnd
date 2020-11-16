import { FETCH_DATA, FETCH_DATA_SUCCESS, LOGIN, REGISTER } from '../actions'

const initialState = {
    articles: [],
    error: '',
    userId: ''
}

export const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOGIN:
            // console.log(action.payload.id)
            return {
                ...state,
                userId: action.payload.user.id
            }
        
        case REGISTER:
            return {
                ...state
            }

        default:
            console.log("default")
            return state
    }
}