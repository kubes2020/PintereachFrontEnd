import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../actions'

const initialState = {
    articles: [],
    error: '',
    isFetching: false
}

export const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                error: '',
                articles: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                articles: action.payload
            }

        default:
            console.log("default")
            return state
    }
}