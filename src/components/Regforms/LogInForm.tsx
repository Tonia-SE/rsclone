import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authReducer';
import { showAlert } from '../../store/messageReducer';
import { ApplicationState } from '../../store/rootReducer';
import { Message } from '../Message/Message';
import { Spinner } from '../Spinner/Spinner';
const tabIndex = -1;

export const LogInForm: React.FC = () => {
  
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const lang = useSelector((state: ApplicationState) => state.lang);
  const isLoading = useSelector((state: ApplicationState) => state.loader.isLoading);
  const logInMessage = lang.value === 'eng' ? 'Log in to your account' : 'Вход в личный кабинет';
  const email = lang.value === 'eng' ? 'Email' : 'Электронная почта';
  const passwordField = lang.value === 'eng' ? 'Password' : 'Пароль';
  const cancel = lang.value === 'eng' ? 'Ok' : 'ОК';
  const logInButton = lang.value === 'eng' ? 'Log in' : 'Принять';
  const inputMessage = lang.value === 'eng' ? 'Enter your email address' : 'Адрес электронной почты';
  const alertWrongEmailOrPassword = lang.value === 'eng' ? 'Wrong email or password' : 'Неправильный адрес электронной почты или пароль';
  const alertTextSuccess = lang.value === 'eng' ? 'You successfully logged in' : 'Вы успешно вошли в личный кабинет';
  const alertEmptyEmailField = lang.value === 'eng' ? 'Enter email' : 'Введите адрес электронной почты';
  const alertEmptyPasswordField = lang.value === 'eng' ? 'Enter password' : 'Введите пароль';
  const alertWrongEmail = lang.value === 'eng' ? 'Wrong email address' : 'Неправильный адрес электронной почты';

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
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder={inputMessage}
                  onChange={(event) => {
                    setUserName(event.currentTarget.value);
                  }}
                />
                <small id="emailHelpLogin" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">{passwordField}</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder={passwordField}
                  onChange={(event) => {
                    setPassword(event.currentTarget.value);
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
              id="loginBtn"
              onClick={() => {
                if (password.trim() === '' || password === undefined) {
                  dispatch(showAlert(alertEmptyPasswordField));
                }
                if (userName.trim() === '' || userName === undefined) {
                  dispatch(showAlert(alertEmptyEmailField));
                }
                if (!/\S+@\S+\.\S+/.test(userName)) {
                  dispatch(showAlert(alertWrongEmail));
                } else {
                  dispatch(loginUser(userName, password, alertTextSuccess, alertWrongEmailOrPassword));
                }
              }}>
              {logInButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};