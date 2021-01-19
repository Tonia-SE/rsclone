import { ADD_STAR, REMOVE_STAR, SET_CARDID } from './actionTypes';

export interface IStarState {
  text: string;
  isAdded: boolean;
  id: string; 
}

interface IStarAction {
  type: string;
  id?: string
}

export type DispatchStar = (args: IStarAction) => IStarAction;

const initialState: IStarState = {
  text: '☆',
  isAdded: false,
  id: ''
};	

export const starReducer = (state: IStarState = initialState, action: IStarAction ) => {
  switch (action.type) {
    // case ADD_STAR:
    //   return { ...state, isAdded: true }; 
    // case REMOVE_STAR:
    //   return { ...state, isAdded: false };
    // case SET_CARDID:
    //   return { ...state, id: action.id }
    default:
      return state;
  }
};