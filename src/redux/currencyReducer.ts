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

const initialState: ICurrencyState = {
  info: {
    value: '$',
    rate: 1
  }
};	

export const currencyReducer = (state: ICurrencyState = initialState, action: ICurrencyAction ) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, info: action.payload };  
    default:
      return state;
  }
};