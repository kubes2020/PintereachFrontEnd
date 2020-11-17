import Axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN = 'login_action'
export const LOGOUT = 'logout_action'
export const REGISTER = 'register_action'
export const ADD_ARTICLE = 'add_article_action'

export const FETCH_DATA = 'fetch_data'
export const FETCH_DATA_SUCCESS = 'fetch_data_success'
export const FETCH_DATA_FAIL = 'fetch_data_fail'

// Fetch Data, after login is finished, dispatch this function
// export const getData = () => (dispatch) => {
//     dispatch({ type: FETCH_DATA })

//     // REPLACE SERVERNAME WITH API CALL, depending on the data results, use id in object number
//     axiosWithAuth().get('SERVERNAME')
//         .then(res => {
//             // console.log(res)

//             // REPLACE DATA HERE, CHECK RES AND REPLACE
//             dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
//         })
//         .catch(err => console.log(err))
// }

// Login & Logout management
export const login = (user) => (dispatch) => {
    dispatch({ type: LOGIN, payload: user })
    localStorage.setItem('token', user.token)
    localStorage.setItem('id', user.user.id)
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT })
}

export const addArticle = (info) => (dispatch) => {
    dispatch({ type: ADD_ARTICLE, payload: info })

    const id = localStorage.getItem('id')

    axiosWithAuth().post(`arts/${id}`, info)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

}

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })

    const id = localStorage.getItem('id')

    axiosWithAuth().get(`arts/${id}`).then((res) => {
        console.log(res.data.data, id)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data })
    })
}