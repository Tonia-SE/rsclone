import { SHOW_CARDS, ADD_STAR, FETCH_CARDS, REMOVE_STAR } from './actionTypes';

export interface ICard {
  _id: string;
  imageUrl: string;
  titleRu: string;
  titleEng: string;
  price: string;
  star: boolean;
  size?: Array<string>
  amount: Array<[string, number]>
}

export interface IAlbumState {
  album: {
    cards: Array<ICard>;
    color: string;    
  };
  show: boolean;
}

interface IAlbumAction {
  type: string;
  payload?: {
    cards: Array<ICard>;
    color: string;
  };  
  cardId?: string
  show?: boolean
}

export type DispatchAlbum = (args: IAlbumAction) => IAlbumAction;

let cards: Array<ICard> = []
const savedCards = localStorage.getItem('cards')
if(savedCards !== null) {
  cards = JSON.parse(savedCards)
}

let color = 'adult' 
const savedColor = localStorage.getItem('color')
if(savedColor !== null) {
  color = JSON.parse(savedColor)
}

const initialState: IAlbumState = {
  album: {
    cards: cards,
    color: color, 
  },
  show: false
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
      localStorage.setItem('cards', JSON.stringify(action.payload.cards))
      localStorage.setItem('color', JSON.stringify(action.payload.color))
      return { ...state, album: action.payload };
    case SHOW_CARDS:        
        return { ...state, show: action.show };      
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
