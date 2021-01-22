import { LOGIN_USER, REGISTER_USER } from './actionTypes';

export interface IAuthState {
  isRegristred?: boolean;
  userName: string;
  isLoggedIn: boolean
  errorText: string
}

interface IAuthAction {
  type: string;
  payload: {
    userName: string;
    errorText: string
    isLoggedIn: boolean;
    isRegristred?: boolean;
  }
}

export type DispatchAuth = (args: IAuthAction) => IAuthAction;

const initialState: IAuthState = {
  userName: '',
  isLoggedIn: false,
  errorText: ''
};	

export const authReducer = (state: IAuthState = initialState, action: IAuthAction ) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };  
    case REGISTER_USER:
      return { ...action.payload }
    default:
      return state;
  }
};