import { act } from 'react-dom/test-utils'
import { ADD_ARTICLE, DELETE_ARTICLE, FETCH_DATA, FETCH_DATA_SUCCESS, LOGIN, LOGOUT, REGISTER } from '../actions'

const initialState = {
    articles: [],
    error: '',
    isLoading: false
}

export const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOGIN:
            // console.log(action.payload.id)
            return {
                ...state,
                isLoading:false
            }

        case LOGOUT:
            return {
                articles: [],
                isLoading:false
            }

        case FETCH_DATA:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                isLoading: false
            }

        case ADD_ARTICLE:
            console.log(action.payload)
            const newArticles = [...state.articles]
            newArticles.push(action.payload)
            return {
                ...state,
                articles: newArticles,
                isLoading: false
            }

        case DELETE_ARTICLE: 
            console.log(action.payload, 'id')
            const filteredArticles= state.articles.filter((item)=>{
                // console.log(item)
                console.log(item.id)
                return item.id!==action.payload
            })
            console.log('filtered articles', filteredArticles)
            return {
                ...state,
                articles: filteredArticles
            }

        default:
            console.log("default")
            return state
    }
}