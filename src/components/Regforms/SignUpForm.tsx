import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { regUser } from '../../store/authReducer';
import { showAlert } from '../../store/messageReducer';
import { ApplicationState } from '../../store/rootReducer';
import { Message } from '../Message/Message';
import { Spinner } from '../Spinner/Spinner';
const tabIndex = -1;

export const SignUpForm: React.FC = () => {
  
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const lang = useSelector((state: ApplicationState) => state.lang);
  const isLoading = useSelector((state: ApplicationState) => state.loader.isLoading);
  const email = lang.value === 'eng' ? 'Email' : 'Электронная почта';
  const passwordField = lang.value === 'eng' ? 'Password' : 'Пароль';
  const cancel = lang.value === 'eng' ? 'Ok' : 'ОК';
  const signupMessage = lang.value === 'eng' ? 'Create your account' : 'Cоздать личный кабинет';
  const confirmMassege = lang.value === 'eng' ? 'Confirm your password' : 'Подтвердите пароль';
  const signupButton = lang.value === 'eng' ? 'Sign Up' : 'Регистрация';
  const inputMessage = lang.value === 'eng' ? 'Enter your email address' : 'Адрес электронной почты';
  const alertTextWrongPasswords = lang.value === 'eng' ? 'Passwords are not match' : 'Пароли не совпадают';
  const alertTextSuccess = lang.value === 'eng' ? 'Registered successfully' : 'Вы успешно зарегистрированы';
  const alertTextUserExit = lang.value === 'eng' ? 'Email already used' : 'Этот адрес электронной почты уже использован';
  const alertEmptyEmailField = lang.value === 'eng' ? 'Enter email' : 'Введите адрес электронной почты';
  const alertEmptyPasswordField = lang.value === 'eng' ? 'Enter password' : 'Введите пароль';
  const alertShortPassword = lang.value === 'eng' ? 'Password length should be 6 characters at least' : 'Длина пароля должна быть не менее 6 символов';
  const alertWrongEmail = lang.value === 'eng' ? 'Wrong email address' : 'Неправильный адрес электронной почты';

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
                <input
                  type="email"
                  className="form-control"
                  id="signUpEmail"
                  aria-describedby="emailHelp"
                  placeholder={inputMessage}
                  onChange={(event) => {
                    setUserName(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">{passwordField}</label>
                <input
                  type="password"
                  className="form-control"
                  id="signUpPassword"
                  placeholder={passwordField}
                  onChange={(event) => {
                    setPassword(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">{confirmMassege}</label>
                <input
                  type="password"
                  className="form-control"
                  id="signUpConfirmPassword"
                  placeholder={passwordField}
                  onChange={(event) => {
                    setPassword2(event.currentTarget.value);
                  }}
                />
                <Message />
              </div>
            </form>
          </div>
          {isLoading && <Spinner />}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary okBtn" data-dismiss="modal">
              {cancel}
            </button>
            <button
              type="button"
              className="btn btn-secondary confirmBtn"
              id="signUpBtn"
              onClick={() => {
                if (password.trim() === '' || password2.trim() === '' || password === undefined || password2 === undefined) {
                  dispatch(showAlert(alertEmptyPasswordField));
                }
                if (userName.trim() === '' || userName === undefined) {
                  dispatch(showAlert(alertEmptyEmailField));
                }
                if (password === password2) {
                  if (!/\S+@\S+\.\S+/.test(userName)) {
                    dispatch(showAlert(alertWrongEmail));
                  } else {
                    if (password.length < 6) {
                      dispatch(showAlert(alertShortPassword));
                    } else {
                      dispatch(regUser(userName, password, alertTextSuccess, alertTextUserExit));
                    }
                  }
                } else {
                  dispatch(showAlert(alertTextWrongPasswords));
                }
              }}>
              {signupButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
