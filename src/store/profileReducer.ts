import { ADD_ORDER, REMOVE_ORDER, SET_NAME, SET_ORDER, SHOW_ALERT } from './actionTypes';
import { IPosition } from './shoppingCartReducer';
import { IOrderState } from './orderReducer';
import { ICardState } from './cardReducer';

export interface IProfileState {
  name: string;
  wishes?: Array<ICardState>
  orders?: Array<IOrderState>
}

interface IProfileAction {
  type: string;
  name: string;
  wishes?: Array<ICardState>
  orders?: Array<IOrderState>
}

export type DispatchProfile = (args: IProfileAction) => IProfileAction;

const initialState: IProfileState = {
  name: '',
  wishes: [],
  orders: []
};	

export const profileReducer = (state: IProfileState = initialState, action: IProfileAction ) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, orders: action.orders }; 
    case REMOVE_ORDER:
      return { ...state, orders: action.orders };
    case SET_NAME:
      return { ...state, name: action.name }; 
    default:
      return state;
  }
};

// export function removeOrderFromProfile(order: IOrderState) {
//   dispatch({ type: REMOVE_ORDER, orders:  });
// }
