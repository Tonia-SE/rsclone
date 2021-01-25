import { ADD_ORDER, ADD_TO_WHISHES, REMOVE_FROM_WHISHES, REMOVE_ORDER, SET_NAME } from './actionTypes';;
import { IOrderState } from './orderReducer';
import { ICardState } from './cardReducer';

export interface IProfileState {
  name: string;
  wishes?: Array<ICardState>
  orders?: Array<IOrderState>
}

interface IProfileAction {
  type: string;
  name?: string;
  wish?: ICardState
  order?: IOrderState
  orderId?: string 
}

export type DispatchProfile = (args: IProfileAction) => IProfileAction;

const initialState: IProfileState = {
  name: '',
  wishes: [],
  orders: []
};

let profileState = { ...initialState }

const savedState = localStorage.getItem('profile')
if(savedState !== null) {
  profileState = JSON.parse(savedState)
}

export const profileReducer = (state: IProfileState = profileState, action: IProfileAction ) => {

  switch (action.type) {
    case ADD_ORDER:
      state.orders.push(action.order)
      localStorage.setItem('profile', JSON.stringify(state))
      return { ...state }; 

    case REMOVE_ORDER:
      const newOrders = state.orders.filter((order) => {
        if(order.orderId !== action.orderId) {
          return true
        } return false
      })
      const newState = { ...state, orders: newOrders }
      localStorage.setItem('profile', JSON.stringify(newState))
      return newState

    case SET_NAME:
      return { ...state, name: action.name }; 
    
    case ADD_TO_WHISHES:
      state.wishes.push(action.wish)
      localStorage.setItem('profile', JSON.stringify(state))
      return { ...state };  
      
    case REMOVE_FROM_WHISHES:  
      const newWishes = state.wishes.filter((wish) => {
        if(wish._id !== action.wish._id) {
          return true
        } return false
      })
      const newProfileState = { ...state, wishes: newWishes }
      localStorage.setItem('profile', JSON.stringify(newProfileState))
      return newProfileState

    default:
      return state;
  }
};

// export function removeOrderFromProfile(order: IOrderState) {
//   dispatch({ type: REMOVE_ORDER, orders:  });
// }
