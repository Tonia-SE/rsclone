//import { SET_COLOR } from "./types"
import { FETCH_CARDS } from './actionTypes';

// const initialState = {
//     fetchedCards: [],
//     color: 'adult'
// }
// export const cardsReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_CARDS:
//             return {...state, fetchedCards: action.payload}
//         case SET_COLOR:
//             return {...state, color: action.payload}
//         default: return state
//     }
// }

//import { FETCH_CATEGORIES } from './actionTypes';

interface ICards {
  amount: Array<Object>;
  _id: string;
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  __v: number;
}

export interface ICardsState {
  album: {
    cards: Array<ICards>;
    color: string;
  };
}

interface ICardsAction {
  type: string;
  payload: {
    cards: Array<ICards>;
    color: string;
  };
}

export type DispatchCards = (args: ICardsAction) => ICardsAction;

const initialState: ICardsState = {
  album: {
    cards: [],
    color: 'adult',
  },
};
// export const controlsReducer = (state: ICardsState = initialState, action: ICardsAction) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES:
//       return { ...state, fetchedCategoires: action.payload };
//     // case SET_CATEGORY:
//     //     return {...state, categoryId: action.payload}
//     default:
//       return state;
//   }
// };

export const cardsReducer = (state: ICardsState = initialState, action: ICardsAction) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, album: action.payload };
    default:
      return state;
  }
};
