import { useSelector } from 'react-redux';
import { backendServer, rateUrl } from '../consts';
//import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_COLOR } from "./actionTypes";
import { ADD_TO_SHOPCART, FETCH_CARDS, FETCH_CARD_INFO, FETCH_CATEGORIES, REMOVE_FROM_CART, SET_CURRENCY, SET_QUANTITY, SET_SIZE } from './actionTypes';
import { DispatchAlbum } from './albumReducer';
import { DispatchCard, ICardState } from './cardReducer';
import { DispatchCategory } from './controlsReducer';
import { DispatchCurrency } from './currencyReducer';
import { ApplicationState } from './rootReducer';
import { DispatchShopCart, IPosition } from './shoppingCartReducer';

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

export function setSize(size: string) {
  return (dispatch: DispatchCard) => {
    if(size !== 'SIZE') {
      dispatch({ type: SET_SIZE, currentSize: size });
    }
  };
}

export function setQuantity(quantity: number, key: string)  {
  const [id, size] = key.split('_');
  return (dispatch: DispatchShopCart) => {
    if (quantity >= 0) {
      dispatch({type: SET_QUANTITY, payload: {
          id: id,
          size: size,
          quantity: quantity
        }
      })
    } else {
      console.log("Add alert here: ");
    }
  };
} 

export function addPosition(id: string, size: string, currentPositions:Array<IPosition>) {
  return async (dispatch: DispatchShopCart) => {
    if(size !== 'SIZE') {
      try {
        const response = await fetch(`${backendServer}/cards?_id=${id}`);
        const json = await response.json();
        const isPositionAlreadyExists = currentPositions.find((position: IPosition) => {
          if(position.id === id && position.size === size) {
            return true
          }
          return false
        })
        if (isPositionAlreadyExists === undefined) {
          dispatch({ type: ADD_TO_SHOPCART, payload: {
            id: id,
            title: json[0].title,
            imageUrl: json[0].imageUrl,
            price: json[0].price,
            size: size,
            quantity: 1
            }  
          });
        } else {
          console.log("Add alert here: the same position is already in cart");
        }
      } catch (e) {
      }
    } else {
      console.log("Add alert here: Choose size !");
    }
  };
}

export function removeFromCart(key: string) {
  const [id, size] = key.split('_');
  return (dispatch: DispatchShopCart) => {
    dispatch({ type: REMOVE_FROM_CART, payload: {id: id, size: size, quantity: 0} });
  };
}

export function toggleNavbarDropdownMenu() {
  const menu = document.getElementById('navbarSupportedContent');
  if(menu.classList.toString().includes('show')) {
    menu.classList.toggle('show');
  }
}

// export function removeFromCart(id: string, size: string, currentPositions: Array<IPosition>) {
//   const isPositionAlreadyExists = currentPositions.find((position: IPosition) => {
//     if(position.id === id && position.size === size) {
//       return true
//     }
//     return false
//   });
//   if (isPositionAlreadyExists !== undefined) {
//     const positions = currentPositions.replase(isPositionAlreadyExists, "")
//   }
//   arr = arr.filter(function(item) { 
//     return item !== value
// })
// }
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
