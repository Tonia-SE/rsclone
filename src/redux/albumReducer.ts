//import { SET_COLOR } from "./types"
import { ADD_STAR, FETCH_CARDS, REMOVE_STAR, SET_CARDID } from './actionTypes';

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
export interface ICard {
  _id: string;
  imageUrl: string;
  title: string;
  price: string;
  __v: number;
  star: boolean;
  size?: Array<string>
}

// interface ICard {
//   amount: Array<[string, number]>;
//   _id: string;
//   id: string;
//   imageUrl: string;
//   title: string;
//   price: string;
//   __v: number;
//   currentSize: 'SIZE';
// }

export interface IAlbumState {
  album: {
    cards: Array<ICard>;
    color: string;
  };
}

interface IAlbumAction {
  type: string;
  payload?: {
    cards: Array<ICard>;
    color: string;
  };  
  cardId?: string
}

export type DispatchAlbum = (args: IAlbumAction) => IAlbumAction;

const initialState: IAlbumState = {
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

export const albumReducer = (state: IAlbumState = initialState, action: IAlbumAction) => {
  switch (action.type) {
    case FETCH_CARDS:
      action.payload.cards.forEach((card:ICard) => {card.star = false})
      return { ...state, album: action.payload };
    case ADD_STAR:
      return { ...state, album: 
        {cards: state.album.cards.map((card:ICard) => {
          if (card._id === action.cardId) {
            card.star = true
          }
          return card;
        }), color: state.album.color }};
    case REMOVE_STAR:      
      return { ...state, album: 
        {cards: state.album.cards.map((card:ICard) => {
          if (card._id === action.cardId) {
            card.star = false
          }
          return card;
        }), color: state.album.color }};
    default:
      return state;
  }
};
