import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from '../../store/actionTypes';
import { ApplicationState } from '../../store/rootReducer';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState)  => state.lang);
  const name = useSelector((state: ApplicationState)  => state.auth.userName);

  
  let logInMessage = (lang.value === 'eng')? 'Log in to your account': 'Вход в личный кабинет';
  return(
  <div className="profile-wrapper p-4">
    <div className="profile-name p-2">
      <p>{(lang.value === 'eng')? 'Welcome to your profile': 'Добро пожаловать в личный кабинет'}</p>
      <p>{name}</p>
    </div>

      <div className="my-orders-title p-2">
        <p>{(lang.value === 'eng')? 'My order list': 'Мои заказы'}</p>
      </div>
        <table className="table table-hover responsive">
          <thead>
            <tr>
              <th scope="col">{(lang.value === 'eng')? '№': '№'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Date': 'Дата'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Total': 'Сумма'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Status': 'Статус'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Cancel': 'Отменить'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>


      <div className="my-whishes-title p-2">
        <p>{(lang.value === 'eng')? 'My whish list': 'Избранное'}</p>
      </div> 
        <table className="table table-hover responsive">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">{(lang.value === 'eng')? 'Title': 'Модель'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Size': 'Размер'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Price': 'Цена'}</th>
              <th scope="col">{(lang.value === 'eng')? 'Delete': 'Удалить'}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

    <a href='/'>
      <button className="log-out" onClick={() => {dispatch({type: LOGOUT_USER})}}>
        <p>{(lang.value === 'eng')? 'Log out': 'Выxод'}</p>
      </button>
    </a>
  </div>)}