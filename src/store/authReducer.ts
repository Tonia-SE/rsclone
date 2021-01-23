import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from './actionTypes';

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

let authState = {...initialState}
const savedState = localStorage.getItem('authstate')
if(savedState !== null) {
  authState = JSON.parse(savedState)
}

export const authReducer = (state: IAuthState = authState, action: IAuthAction ) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem('authstate', JSON.stringify(action.payload))
      return { ...action.payload };
    case LOGOUT_USER:
      localStorage.removeItem('authstate')
      return { ...initialState };
    case REGISTER_USER:
      return { ...action.payload }
    default:
      return state;
  }
};