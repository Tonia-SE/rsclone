import { combineReducers, Reducer } from 'redux';
import { albumReducer, IAlbumState } from './albumReducer';
import { cardReducer, ICardState } from './cardReducer';
import { controlsReducer, ICategoryState } from './controlsReducer';
import { currencyReducer, ICurrencyState } from './currencyReducer';
import { IShopCartState, shopCartReducer } from './shoppingCartReducer';

export interface ApplicationState {
  controls: ICategoryState;
  album: IAlbumState;
  card: ICardState;
  currency: ICurrencyState;
  shopCart: IShopCartState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  controls: controlsReducer,
  album: albumReducer,
  card: cardReducer,
  currency: currencyReducer,
  shopCart: shopCartReducer
});
