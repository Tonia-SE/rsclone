import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";
import { FETCH_CARDS, FETCH_CATEGORIES } from "./types"

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 1000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchCategories() {
    return async dispatch => {
        try {
            //dispatch(showLoader())
            const response = await fetch('http://localhost:8080/categories')
            const json = await response.json()
            dispatch({type: FETCH_CATEGORIES, payload: json})
            //dispatch(hideLoader())
        } catch(e) {
            //dispatch(showAlert('Ошибка загрузки'))
            //dispatch(hideLoader())
        } 
    }
}

export function fetchCards(id) {
    console.log(id);
    return async dispatch => {
        try {
            //dispatch(showLoader())
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${id}`)
            const json = await response.json()
            dispatch({type: FETCH_CARDS, payload: json})
            //dispatch(hideLoader())
        } catch(e) {
            // dispatch(showAlert('Ошибка загрузки'))
            // dispatch(hideLoader())
        } 
    }
}