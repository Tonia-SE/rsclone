import { ADD_ORDER, ADD_TO_WHISHES, REMOVE_FROM_WHISHES, REMOVE_ORDER, SET_NAME } from './actionTypes';
import { IOrderState } from './orderReducer';
import { IPosition } from './shoppingCartReducer';
import { showAlert } from './messageReducer';
import { backendServer } from '../consts';

export interface IProfileState {
  name: string;
  wishes?: Array<IPosition>;
  orders?: Array<IOrderState>;
}

interface IProfileAction {
  type: string;
  name?: string;
  wish?: IPosition;
  order?: IOrderState;
  orderId?: string;
}

export type DispatchProfile = (args: IProfileAction) => IProfileAction;

const initialState: IProfileState = {
  name: '',
  wishes: [],
  orders: [],
};

let profileState = { ...initialState };

const savedState = localStorage.getItem('profile');
if (savedState !== null) {
  profileState = JSON.parse(savedState);
}

export const profileReducer = (state: IProfileState = profileState, action: IProfileAction) => {
  switch (action.type) {
    case ADD_ORDER:
      state.orders.push(action.order);
      localStorage.setItem('profile', JSON.stringify(state));
      return { ...state };

    case REMOVE_ORDER:
      const newOrders = state.orders.filter((order) => {
        if (order.orderId !== action.orderId) {
          return true;
        }
        return false;
      });
      const newState = { ...state, orders: newOrders };
      localStorage.setItem('profile', JSON.stringify(newState));
      return { ...newState };

    case SET_NAME:
      return { ...state, name: action.name };

    case ADD_TO_WHISHES:
      state.wishes.push(action.wish);
      const updatedProfileState = { ...state, wishes: state.wishes };
      localStorage.setItem('profile', JSON.stringify(updatedProfileState));
      return { ...updatedProfileState };

    case REMOVE_FROM_WHISHES:
      const newWishes = state.wishes.filter((wish) => {
        if (wish.id === action.wish.id && wish.size === action.wish.size) {
          return false;
        }
        return true;
      });
      const newProfileState = { ...state, wishes: newWishes };
      localStorage.setItem('profile', JSON.stringify(newProfileState));
      return { ...newProfileState };

    default:
      return state;
  }
};

export function addToWishList(user: string, id: string, size: string, currentWhishes: Array<IPosition>, lang: string) {
  if (size !== 'SIZE' && size !== 'РАЗМЕР') {
    const isWishAlreadyExists = currentWhishes.find((whish: IPosition) => {
      if (whish.id === id && whish.size === size) {
        return true;
      }
      return false;
    });
    if (isWishAlreadyExists === undefined) {
      return async (dispatch: DispatchProfile) => {
        try {
          const response = await fetch(`${backendServer}/cards?_id=${id}`);
          const json = await response.json();

          dispatch({
            type: ADD_TO_WHISHES,
            wish: {
              id: id,
              titleEng: json[0].titleEng,
              titleRu: json[0].titleRu,
              imageUrl: json[0].imageUrl,
              price: json[0].price,
              size: size,
              quantity: 1,
            },
          });

          await fetch(`${backendServer}/profile/wish_list`, {
            method: 'POST',
            cache: 'no-cache', 
            body: JSON.stringify({
              user: user,
              id: id,
              size: size,
            }), 
            headers: {
              'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
          });
        } catch (e) {}
      };
    } else {
      if (lang === 'eng') {
        return showAlert('The same position is already in whish list');
      } else {
        return showAlert('Такой размер уже в избранном');
      }
    }
  } else {
    if (lang === 'eng') {
      return showAlert('Choose a size');
    } else {
      return showAlert('Выберите размер');
    }
  }
}
