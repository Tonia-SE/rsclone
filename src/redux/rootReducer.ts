import { combineReducers, Reducer } from 'redux';
import { albumReducer, IAlbumState } from './albumReducer';
import { cardReducer, ICardState } from './cardReducer';
import { controlsReducer, ICategoryState } from './controlsReducer';
import { currencyReducer, ICurrencyState } from './currencyReducer';
import { messageReducer, IMessageState } from './messageReducer';
import { shopCartReducer, IShopCartState } from './shoppingCartReducer';
import { langReducer, ILangState } from './langReducer';

export interface ApplicationState {
  controls: ICategoryState;
  album: IAlbumState;
  card: ICardState;
  currency: ICurrencyState;
  shopCart: IShopCartState;
  message: IMessageState;
  lang: ILangState;
  //star: IStarState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  controls: controlsReducer,
  album: albumReducer,
  card: cardReducer,
  currency: currencyReducer,
  shopCart: shopCartReducer,
  message: messageReducer,
  lang: langReducer,
});
