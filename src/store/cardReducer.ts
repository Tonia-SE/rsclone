import { FETCH_CARD_INFO, SET_SIZE } from './actionTypes';

export interface ICardState {
  _id: string;    
  category: string;
  imageUrl: string;
  titleEng: string;
  titleRu: string;
  price: string
  star: boolean;
  size?: Array<string>
  amount: Array<[string, number]>
  currentSize: string
}

interface ICardAction {
  type: string;
  payload?: {    
    amount: Array<[string, number]>;
    _id: string;
    category: string;
    imageUrl: string;
    titleEng: string;
    titleRu: string;
    price: number
  };
  currentSize?: string;
}

export type DispatchCard = (args: ICardAction) => ICardAction;

// let currentSize = '' 
// const savedSize = localStorage.getItem('currentSize')
// if(savedSize !== null) {
//   currentSize = JSON.parse(savedSize)
// }

// console.log(currentSize);

const initialState: ICardState = {
  amount: [],
  _id: "",    
  category: "",
  imageUrl: "",
  titleRu: "",
  titleEng: "",
  price: '',
  star: false,
  currentSize: ''
};

export const cardReducer = (state: ICardState = initialState, action: ICardAction ) => {
  switch (action.type) {
    case FETCH_CARD_INFO:
      return { ...state, info: action.payload };
    case SET_SIZE:
      //localStorage.setItem('currentSize', action.currentSize)
      return { ...state, currentSize: action.currentSize };
    default:
      return state;
  }
};
