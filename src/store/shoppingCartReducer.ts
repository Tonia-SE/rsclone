import { ADD_TO_SHOPCART, REMOVE_FROM_CART, SET_QUANTITY, CLEAR_CART } from './actionTypes';

export interface IShopCartState {
  positions: Array<IPosition>
}

export interface IPosition{
  id: string,
  size: string,
  quantity: number
  titleEng?: string,
  titleRu?: string,
  imageUrl?: string,
  price?: number
}

interface IShopCartAction {
  type: string;
  payload: {    
    id: string,
    size: string,
    quantity: number
    titleEng?: string,
    titleRu?: string,
    imageUrl?: string,
    price?: number
  };
}

export type DispatchShopCart = (args: IShopCartAction) => IShopCartAction;

const initialState: IShopCartState = {
  positions: []
};

let savedState = {...initialState}

const savedShopCart = localStorage.getItem('shopCart')
  if(savedShopCart !== null) {
    //positions = JSON.parse(savedShopCart)
    savedState.positions = JSON.parse(savedShopCart)
  }

export const shopCartReducer = (state: IShopCartState = savedState, action: IShopCartAction ) => {
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

    case CLEAR_CART:  
      return {...state, positions: []}

    default:
      return state;
  }
};
