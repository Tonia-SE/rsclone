import { HIDE_ALERT, SHOW_ALERT } from './actionTypes';

export interface IMessageState {
  text?: string;
  isOn: boolean; 
}

interface IMessageAction {
  type: string;
  text?: string;
}

export type DispatchMessage = (args: IMessageAction) => IMessageAction;

const initialState: IMessageState = {
  text: '',
  isOn: false,
};	

export const messageReducer = (state: IMessageState = initialState, action: IMessageAction ) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, text: action.text, isOn: true }; 
    case HIDE_ALERT:
      return { ...state, isOn: false };
    default:
      return state;
  }
};

