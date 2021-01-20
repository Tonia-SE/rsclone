import { FETCH_CATEGORIES } from './actionTypes';

interface ICategory {
  _id: string;
  titleEng: string;
  titleRu: string;
  color: string;
  __v: number;
}

export interface ICategoryState {
  fetchedCategoires: Array<ICategory>;
}

interface ICategoryAction {
  type: string;
  payload: Array<ICategory>;
}

export type DispatchCategory = (args: ICategoryAction) => ICategoryAction;

const initialState: ICategoryState = {
  //categoryId: 1,
  fetchedCategoires: [],
};
export const controlsReducer = (state: ICategoryState = initialState, action: ICategoryAction) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, fetchedCategoires: action.payload };
    // case SET_CATEGORY:
    //     return {...state, categoryId: action.payload}
    default:
      return state;
  }
};
