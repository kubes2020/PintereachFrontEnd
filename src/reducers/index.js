import { FETCH_DATA, FETCH_DATA_SUCCESS, LOGIN, LOGOUT, REGISTER } from '../actions'

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

        case LOGOUT:
            return {
                articles: [],
                userId:'',
            }

        default:
            console.log("default")
            return state
    }
}