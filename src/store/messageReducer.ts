import { HIDE_ALERT, SHOW_ALERT } from './actionTypes';

export interface IMessageState {
  text?: string;
  isOn: boolean;
  className: string
}

interface IMessageAction {
  type: string;
  text?: string;
  className?: string
}

export type DispatchMessage = (args: IMessageAction) => IMessageAction;

const initialState: IMessageState = {
  text: '',
  isOn: false,
  className: 'my-danger'
};	

export const messageReducer = (state: IMessageState = initialState, action: IMessageAction ) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, text: action.text, isOn: true, className: action.className }; 
    case HIDE_ALERT:
      return { ...state, isOn: false };
    default:
      return state;
  }
};

