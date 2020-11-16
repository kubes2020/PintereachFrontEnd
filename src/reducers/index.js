import { FETCH_DATA, FETCH_DATA_SUCCESS, REGISTER } from '../actions'

const initialState = {
    articles: [],
    error: '',
    isLoggedIn: false,
    userId: null
}

export const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case REGISTER:
            return {
                ...state
            }

        default:
            console.log("default")
            return state
    }
}