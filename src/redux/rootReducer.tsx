import { combineReducers, Reducer } from 'redux';
import { cardsReducer, ICardsState } from './cardsReducer';
//import { cardsReducer } from './cardsReducer'
import { controlsReducer, ICategoryState } from './controlsReducer';

export interface ApplicationState {
  controls: ICategoryState;
  cards: ICardsState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  controls: controlsReducer,
  cards: cardsReducer,
});
