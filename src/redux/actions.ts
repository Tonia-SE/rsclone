import { backendServer, rateUrl } from '../consts';
//import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_COLOR } from "./actionTypes";
import { FETCH_CARDS, FETCH_CARD_INFO, FETCH_CATEGORIES, SET_CURRENCY } from './actionTypes';
import { DispatchAlbum } from './albumReducer';
import { DispatchCard } from './cardReducer';
import { DispatchCategory } from './controlsReducer';
import { DispatchCurrency } from './currencyReducer';

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
      //dispatch(hideLoader())
    } catch (e) {
      //dispatch(showAlert('Ошибка загрузки'))
      //dispatch(hideLoader())
    }
  };
}

export function fetchCard(cardId: string) {
  return async (dispatch: DispatchCard) => {
    try {
      //dispatch(showLoader())
      const response = await fetch(`${backendServer}/cards?_id=${cardId}`);
      const json = await response.json();      
      dispatch({ type: FETCH_CARD_INFO, payload: json[0] });
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
    return async (dispatch: DispatchAlbum) => {
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

export function setCurrency(value: string) {
  return async (dispatch: DispatchCurrency) => {
    try {
      //dispatch(showLoader())
      let rate = 1;
      if(value !== '$') {
        const response = await fetch(rateUrl);
        const json = await response.json();
        rate = json.Valute.USD.Value;
      }
      dispatch({ type: SET_CURRENCY, payload: {
        value: value,
        rate: rate
      }});      
      //dispatch(hideLoader())type: string;
    } catch (e) {
      //dispatch(showAlert('Ошибка загрузки'))
      //dispatch(hideLoader())
    }
  };
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
