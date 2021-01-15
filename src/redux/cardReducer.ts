// import { FETCH_CARD_INFO } from './actionTypes';


// interface ICard {
//   amount: Array<[string, number]>;
//   _id: string;
//   imageUrl: string;
//   title: string;
//   price: string;
//   currentSize: string;
// }

// export interface ICardState {
//   amount: Array<[string, number]>;
//   _id: string;
//   currentSize: string;
// }

// interface ICardAction {
//   type: string;
//   payload: {
//     cards: Array<ICard>;
//     color: string;
//   };
// }

// export type DispatchCard = (args: ICardAction) => ICardAction;

// const initialState: ICardState = {
//   amount: Array<[string, number]>;
//   _id: string;
//   currentSize: 'SIZE';
// };
// // export const controlsReducer = (state: ICardsState = initialState, action: ICardsAction) => {
// //   switch (action.type) {
// //     case FETCH_CATEGORIES:
// //       return { ...state, fetchedCategoires: action.payload };
// //     // case SET_CATEGORY:
// //     //     return {...state, categoryId: action.payload}
// //     default:
// //       return state;
// //   }
// // };

// export const albumReducer = (state: IAlbumState = initialState, action: IAlbumAction) => {
//   switch (action.type) {
//     case FETCH_CARD_INFO:
//       return { ...state, album: action.payload };
//     default:
//       return state;
//   }
// };
