import { backendServer } from '../consts';
import { SET_ORDER } from './actionTypes';
import { IPosition } from './shoppingCartReducer';

export interface IOrderState {
  orderId: string;
  total: string;
  positions: Array<IPosition>;
  orderData: string;
}

interface IOrderAction {
  type: string;
  orderId: string;
  total: string;
  positions: Array<IPosition>;
  orderData: string;
}

export type DispatchOrder = (args: IOrderAction) => IOrderAction;

const initialState: IOrderState = {
  orderId: '',
  total: '',
  positions: [],
  orderData: '',
};

export const orderReducer = (state: IOrderState = initialState, action: IOrderAction) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orderId: action.orderId, total: action.total, positions: action.positions, orderData: action.orderData };
    default:
      return state;
  }
};

export function setOrder(user: string, orderId: string, total: string, positions: Array<IPosition>, orderData: string) {
  return async (dispatch: DispatchOrder) => {
    dispatch({
      type: SET_ORDER,
      orderId: orderId,
      total: total,
      positions: positions,
      orderData: orderData,
    });
    try {
      await fetch(`${backendServer}/profile/orders`, {
        method: 'POST',
        cache: 'no-cache', 
        body: JSON.stringify({
          user: user,
          orderId: orderId,
          total: total,
          positions: positions,
          orderData: orderData,
        }), 
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
      });
    } catch (e) {}
  };
}
