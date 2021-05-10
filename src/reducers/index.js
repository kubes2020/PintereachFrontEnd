import { act } from "react-dom/test-utils";
import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FILTER,
    LOGIN,
    LOGOUT,
    REGISTER,
} from "../actions";

const initialState = {
    articles: [],
    searchTerm: "",
    error: "",
    isLoading: false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: false,
            };

        case LOGOUT:
            return {
                articles: [],
                isLoading: false,
            };

        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                isLoading: false,
            };

        case ADD_ARTICLE:
            const newArticles = [...state.articles];
            newArticles.push(action.payload);
            return {
                ...state,
                articles: newArticles,
                isLoading: false,
            };

        case DELETE_ARTICLE:
            const filteredArticles = state.articles.filter((item) => {
                return item.id !== action.payload;
            });
            return {
                ...state,
                articles: filteredArticles,
                unfiltered: filteredArticles,
            };

        case FILTER:
            return {
                ...state,
                searchTerm: action.payload,
            };

        default:
            return state;
    }
};
