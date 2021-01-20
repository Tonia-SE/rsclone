import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/rootReducer';
//import { useTabIndex } from 'react-tabindex';

const tabIndex:number = -1;

const loginHandler = () => {

}

export const LogInForm: React.FC = () => {
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let logInMessage = (lang.value === 'eng')? 'Log in to your account': 'Вход в личный кабинет';
  let email = (lang.value === 'eng')? 'Email': 'Электронная почта';
  let password = (lang.value === 'eng')? 'Password': 'Пароль';
  let cancel = (lang.value === 'eng')? 'Cancel': 'Назад';
  let logInBtn = (lang.value === 'eng')? 'Log in': 'Принять';
  let inputMessage = (lang.value === 'eng')? 'Enter your email address': 'Адрес электронной почты';
  
  return (
    <div className="modal" tabIndex={tabIndex} id="logInModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        {/* none */}
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
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder={inputMessage} />
                <small id="emailHelpLogin" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">{password}</label>
                <input type="password" className="form-control" id="loginPassword" placeholder={password} />
                {/* <small id="emailHelpPassword" className="form-text text-muted">Wrong email or password</small> */}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">{cancel}</button>
            <button type="button" className="btn btn-primary" id="loginBtn" onClick={()=>{}}>{logInBtn}</button>
          </div>
        </div>
      </div>
    </div>
  )}
    
export const SignUpForm: React.FC = () => {
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let email = (lang.value === 'eng')? 'Email': 'Электронная почта';
  let password = (lang.value === 'eng')? 'Password': 'Пароль';
  let cancel = (lang.value === 'eng')? 'Cancel': 'Назад';
  let signupMessage = (lang.value === 'eng')? 'Create your account': 'Cоздать личный кабинет';
  let confirmMassege = (lang.value === 'eng')? 'Confirm your password': 'Подтвердите пароль';
  let signupBtn = (lang.value === 'eng')? 'Sign Up': 'Регистрация'
  let inputMessage = (lang.value === 'eng')? 'Enter your email address': 'Адрес электронной почты'


  return (
    <div className="modal" tabIndex={tabIndex} id="signUpModal">
      <div className="modal-dialog" role="document">
        {/* none */}
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
                <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder={inputMessage} />
                <small id="emailHelpSignUp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">{password}</label>
                <input type="password" className="form-control" id="signUpPassword" placeholder={password} />
                <small id="signUpHelpPassword" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">{confirmMassege}</label>
                <input type="password" className="form-control" id="signUpConfirmPassword" placeholder={password} />
                <small id="signUpHelpPasswordConfirm" className="form-text text-muted"></small>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">{cancel}</button>
            <button type="button" className="btn btn-primary" id="signUpBtn">{signupBtn}</button>
          </div>
        </div>
      </div>
    </div>
  )}
    
    