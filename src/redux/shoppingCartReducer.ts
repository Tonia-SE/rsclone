import { ADD_TO_SHOPCART, REMOVE_FROM_CART, SET_QUANTITY } from './actionTypes';

export interface IShopCartState {
  positions: Array<IPosition>
}

export interface IPosition{
  id: string,
  size: string,
  quantity: number
  title?: string,
  imageUrl?: string,
  price?: number
}

interface IShopCartAction {
  type: string;
  payload: {    
    id: string,
    size: string,
    quantity: number
    title?: string,
    imageUrl?: string,
    price?: number
  };
}

export type DispatchShopCart = (args: IShopCartAction) => IShopCartAction;

let positions: Array<IPosition> = []
const savedShopCart = localStorage.getItem('shopCart')
  if(savedShopCart !== null) {
    positions = JSON.parse(savedShopCart)
  }
const initialState: IShopCartState = {
  positions: positions
};

export const shopCartReducer = (state: IShopCartState = initialState, action: IShopCartAction ) => {
  switch (action.type) {
    case ADD_TO_SHOPCART:
      const isPositionAlradyExists = state.positions.find((position: IPosition) => {
        if(position.id === action.payload.id && position.size === action.payload.size) {
          return true
        }
        return false
      })
      if (isPositionAlradyExists === undefined) {
        state.positions.push(action.payload)
      }
      localStorage.setItem('shopCart', JSON.stringify(state.positions))
      return {...state, positions: state.positions}

    case SET_QUANTITY:
      const updatedPositions = state.positions.map((position: IPosition) => {
        if(position.id !== action.payload.id || position.size !== action.payload.size) {
          return position
        } else {
          return {...position, quantity: action.payload.quantity}
        }
      })
      localStorage.setItem('shopCart', JSON.stringify(updatedPositions))
      return {...state, positions: updatedPositions}; 

    case REMOVE_FROM_CART:
      const afterDelPositions = state.positions.filter((position: IPosition) => {
        if(position.id === action.payload.id && position.size === action.payload.size) {
          return false
        }
        return true
      })
      localStorage.setItem('shopCart', JSON.stringify(afterDelPositions))
      return {...state, positions: afterDelPositions}   
    default:
      return state;
  }
};
