import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN = 'login_action'
export const LOGOUT = 'logout_action'
export const REGISTER = 'register_action'
export const ADD_ARTICLE = 'add_article_action'

export const FETCH_DATA = 'fetch_data'
export const FETCH_DATA_SUCCESS = 'fetch_data_success'
export const FETCH_DATA_FAIL = 'fetch_data_fail'

export const DELETE_ARTICLE = 'delete_action'

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
export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN, payload: data })

    // const token = data.token.slice(1,-1)

    // console.log(token)
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.user.id)
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
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

export const deleteArticle = (id) => (dispatch) => {
    dispatch({ type: DELETE_ARTICLE, payload: id })

    axiosWithAuth().delete((`arts/${id}`))
        .then((res) => {
            console.log(res.data)
        })
}