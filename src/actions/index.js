import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN = "login_action";
export const LOGOUT = "logout_action";
export const REGISTER = "register_action";
export const ADD_ARTICLE = "add_article_action";

export const FETCH_DATA = "fetch_data";
export const FETCH_DATA_SUCCESS = "fetch_data_success";
export const FETCH_DATA_FAIL = "fetch_data_fail";

export const DELETE_ARTICLE = "delete_action";
export const FILTER = "filter_action";

// Login & Logout management
export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN, payload: data });
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user.id);
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch({ type: LOGOUT });
};

export const addArticle = (info) => (dispatch) => {
    dispatch({ type: ADD_ARTICLE, payload: info });

    const id = localStorage.getItem("id");

    axiosWithAuth()
        .post(`arts/${id}`, info)
        .then((res) => {})
        .catch((err) => {
            console.log(err);
        });
};

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA });

    const id = localStorage.getItem("id");

    axiosWithAuth()
        .get(`arts/${id}`)
        .then((res) => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
        });
};

export const deleteArticle = (id) => (dispatch) => {
    dispatch({ type: DELETE_ARTICLE, payload: id });

    axiosWithAuth()
        .delete(`arts/${id}`)
        .then((res) => {});
};

export const filterArticles = (category) => {
    return { type: FILTER, payload: category };
};
