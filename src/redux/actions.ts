import { backendServer } from '../consts';
//import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_COLOR } from "./actionTypes";
import { FETCH_CARDS, FETCH_CATEGORIES } from './actionTypes';
import { DispatchCards } from './cardsReducer';
import { DispatchCategory } from './controlsReducer';

// interface Idispatch {
//   dispatch (type: string, payload: string) {
//   }
// }

//let dispatch = new Idispatch

export function fetchCategories() {
  return async (dispatch: DispatchCategory) => {
    try {
      //dispatch(showLoader())
      const response = await fetch(`${backendServer}/categories`);
      const json = await response.json();
      dispatch({ type: FETCH_CATEGORIES, payload: json });
      console.log(json);
      //dispatch(hideLoader())
    } catch (e) {
      //dispatch(showAlert('Ошибка загрузки'))
      //dispatch(hideLoader())
    }
  };
}

export function chooseCategory(categoryName: string) {
    //console.log(id);
    return async (dispatch: DispatchCards) => {
        try {            
            //dispatch(showLoader())
            const response = await fetch(`${backendServer}/${categoryName}`)
            const json = await response.json()
            dispatch({type: FETCH_CARDS, payload: {cards: json, color: categoryName}})
            //dispatch(hideLoader())
        } catch(e) {
            // dispatch(showAlert('Ошибка загрузки'))
            // dispatch(hideLoader())
        }
    }
}

// export function showLoader() {
//     return {
//         type: SHOW_LOADER
//     }
// }

// export function hideLoader() {
//     return {
//         type: HIDE_LOADER
//     }
// }

// export function showAlert(text: string): Idispatch {
//     return dispatch => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: text
//         })

//         setTimeout(() => {
//             dispatch(hideAlert())
//         }, 1000)
//     }
// }

// export function hideAlert() {
//     return {
//         type: HIDE_ALERT
//     }
// }
