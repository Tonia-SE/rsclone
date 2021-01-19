import { SET_CURRENCY } from './actionTypes';

export interface ICurrencyState {
  info: {
    value: string;
    rate: number;
  }
}

interface ICurrencyAction {
  type: string;
  payload: {
    value: string;
    rate: number;
  }
}

export type DispatchCurrency = (args: ICurrencyAction) => ICurrencyAction;

let initialState: ICurrencyState = {
  info: {
    value: '$',
    rate: 1
  }
};	

if(localStorage.getItem('currency') !== null){
  initialState.info = JSON.parse(localStorage.getItem('currency'))
}

export const currencyReducer = (state: ICurrencyState = initialState, action: ICurrencyAction ) => {
  switch (action.type) {
    case SET_CURRENCY:
      localStorage.setItem('currency', JSON.stringify(action.payload))
      return { ...state, info: action.payload };  
    default:
      return state;
  }
};