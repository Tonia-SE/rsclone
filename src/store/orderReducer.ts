import { HIDE_ALERT, SET_ORDER, SHOW_ALERT } from './actionTypes';
import { IPosition } from './shoppingCartReducer';

export interface IOrderState {
  orderId: string;
  total: string;
  positions: Array<IPosition>
  orderData: string
}

interface IOrderAction {
  type: string;
  orderId: string;
  total: string;
  positions: Array<IPosition>
  orderData: string
}

export type DispatchOrder = (args: IOrderAction) => IOrderAction;

const initialState: IOrderState = {
  orderId: '',
  total: '',
  positions: [],
  orderData: ''
};	

export const orderReducer = (state: IOrderState = initialState, action: IOrderAction ) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orderId: action.orderId, total: action.total, positions: action.positions, orderData: action.orderData}; 
    default:
      return state;
  }
};
