import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, regUser, showAlert } from '../../store/actions';
import { SET_NAME } from '../../store/actionTypes';
import { ApplicationState } from '../../store/rootReducer';
import { Message } from '../Message/Message';
const tabIndex:number = -1;

export const LogInForm: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState)  => state.lang);
  const isLoggedIn = useSelector((state: ApplicationState)  => state.auth.isLoggedIn);
  //const profileName = useSelector((state: ApplicationState)  => state.auth.userName);
  let logInMessage = (lang.value === 'eng')? 'Log in to your account': 'Вход в личный кабинет';
  let email = (lang.value === 'eng')? 'Email': 'Электронная почта';
  let passwordField = (lang.value === 'eng')? 'Password': 'Пароль';
  let cancel = (lang.value === 'eng')? 'Ok': 'ОК';
  let logInBtn = (lang.value === 'eng')? 'Log in': 'Принять';
  let inputMessage = (lang.value === 'eng')? 'Enter your email address': 'Адрес электронной почты';
  let alertWrongEmailOrPassword = (lang.value === 'eng')? 'Wrong email or password': 'Неправильный адрес электронной почты или пароль';
  let alertTextSuccess = (lang.value === 'eng')? 'You successfully logged in': 'Вы успешно вошли в личный кабинет';
  let alertEmptyEmailField = (lang.value === 'eng')? 'Enter email': 'Введите адрес электронной почты';
  let alertEmptyPasswordField = (lang.value === 'eng')? 'Enter password': 'Введите пароль';
  let alertShortPassword = (lang.value === 'eng')? 'Password length should be 6 characters at least': 'Длина пароля должна быть не менее 6 символов';
  let alertWrongEmail = (lang.value === 'eng')? 'Wrong email address': 'Неправильный адрес электронной почты'; 

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="modal" tabIndex={tabIndex} id="logInModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{logInMessage}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="loginEmail">{email}</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder={inputMessage} 
                  onChange={(event) => {setUserName(event.currentTarget.value)}}/>
                <small id="emailHelpLogin" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">{passwordField}</label>
                <input type="password" className="form-control" id="loginPassword" placeholder={passwordField} 
                onChange={(event) => {setPassword(event.currentTarget.value)}}/>
                <Message {...{className:"my-danger"}}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary okBtn" data-dismiss="modal">{cancel}</button>
            <button type="button" className="btn btn-primary confirmBtn" id="loginBtn"
              onClick={()=>{
                if(password.trim() === '' || password === undefined){
                  dispatch(showAlert(alertEmptyPasswordField))
                }
                if(userName.trim() === '' || userName === undefined){
                  dispatch(showAlert(alertEmptyEmailField))
                }
                if(!(/\S+@\S+\.\S+/.test(userName))){
                  dispatch(showAlert(alertWrongEmail))
                } else {
                  if(password.length < 6){
                    dispatch(showAlert(alertShortPassword))
                  } else {
                    dispatch(loginUser(userName, password, alertTextSuccess, alertWrongEmailOrPassword));
                  }
                }
              }}>
              {logInBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
    
export const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let email = (lang.value === 'eng')? 'Email': 'Электронная почта';
  let passwordField = (lang.value === 'eng')? 'Password': 'Пароль';
  let cancel = (lang.value === 'eng')? 'Ok': 'ОК';
  let signupMessage = (lang.value === 'eng')? 'Create your account': 'Cоздать личный кабинет';
  let confirmMassege = (lang.value === 'eng')? 'Confirm your password': 'Подтвердите пароль';
  let signupBtn = (lang.value === 'eng')? 'Sign Up': 'Регистрация'
  let inputMessage = (lang.value === 'eng')? 'Enter your email address': 'Адрес электронной почты';
  let alertTextWrongPasswords = (lang.value === 'eng')? 'Passwords are not match': 'Пароли не совпадают';
  let alertTextSuccess = (lang.value === 'eng')? 'Registered successfully': 'Вы успешно зарегистрированы';
  let alertTextUserExit = (lang.value === 'eng')? 'Email already used': 'Этот адрес электронной почты уже использован';
  let alertEmptyEmailField = (lang.value === 'eng')? 'Enter email': 'Введите адрес электронной почты';
  let alertEmptyPasswordField = (lang.value === 'eng')? 'Enter password': 'Введите пароль';
  let alertShortPassword = (lang.value === 'eng')? 'Password length should be 6 characters at least': 'Длина пароля должна быть не менее 6 символов';
  let alertWrongEmail = (lang.value === 'eng')? 'Wrong email address': 'Неправильный адрес электронной почты';
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [className, setClassName] = React.useState('');

  return (
    <div className="modal" tabIndex={tabIndex} id="signUpModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{signupMessage}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="signUpEmail">{email}</label>
                <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder={inputMessage} 
                onChange={(event) => {setUserName(event.currentTarget.value)}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">{passwordField}</label>
                <input type="password" className="form-control" id="signUpPassword" placeholder={passwordField}
                onChange={(event) => {setPassword(event.currentTarget.value)}} />
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">{confirmMassege}</label>
                <input type="password" className="form-control" id="signUpConfirmPassword" placeholder={passwordField}
                onChange={(event) => {
                  setPassword2(event.currentTarget.value)
                }}/>
                  <Message {...{className: ""}}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary okBtn" data-dismiss="modal">{cancel}</button>
            <button type="button" className="btn btn-primary confirmBtn" id="signUpBtn"
              onClick={()=>{
                if(password.trim() === '' || password2.trim() === '' || password === undefined || password2 === undefined){
                  dispatch(showAlert(alertEmptyPasswordField))
                }
                if(userName.trim() === '' || userName === undefined){
                  dispatch(showAlert(alertEmptyEmailField))
                }
                if(password === password2) {
                  if(!(/\S+@\S+\.\S+/.test(userName))){
                    dispatch(showAlert(alertWrongEmail))
                  } else {
                    if(password.length < 6){
                      dispatch(showAlert(alertShortPassword))
                    } else {
                      dispatch(regUser(userName, password, alertTextSuccess, alertTextUserExit));
                    }
                  }
                } else {
                  dispatch(showAlert(alertTextWrongPasswords))
                }                
              }}>
              {signupBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
    
    