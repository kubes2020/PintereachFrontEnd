import Axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN = 'login_action'
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

export const login = (user) => (dispatch) => {
    dispatch({ type: LOGIN, payload:user })
    // console.log(user.token)
    localStorage.setItem('token', user.token)
}