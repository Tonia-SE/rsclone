import { combineReducers, Reducer } from 'redux';
import { albumReducer, IAlbumState } from './albumReducer';
//import { cardsReducer } from './cardsReducer'
import { controlsReducer, ICategoryState } from './controlsReducer';

export interface ApplicationState {
  controls: ICategoryState;
  album: IAlbumState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  controls: controlsReducer,
  album: albumReducer,
});
