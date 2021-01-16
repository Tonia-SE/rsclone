import { FETCH_CARD_INFO, SET_SIZE } from './actionTypes';

export interface ICardState {
  info: {
    amount: Array<[string, number]>;
    _id: string;    
    catgory: string;
    imageUrl: string;
    title: string;
    price: number
  }
  currentSize: string;
}

interface ICardAction {
  type: string;
  payload?: {    
    amount: Array<[string, number]>;
    _id: string;
    catgory: string;
    imageUrl: string;
    title: string;
    price: number
  };
  currentSize?: string;
}

export type DispatchCard = (args: ICardAction) => ICardAction;

const initialState: ICardState = {
  info: {
    amount: [],
    _id: "",    
    catgory: "",
    imageUrl: "",
    title: "",
    price: 0
  },
  currentSize: 'SIZE'
};

export const cardReducer = (state: ICardState = initialState, action: ICardAction ) => {
  switch (action.type) {
    case FETCH_CARD_INFO:
      return { ...state, info: action.payload };
    case SET_SIZE:
      return { ...state, currentSize : action.currentSize };  
    default:
      return state;
  }
};
