import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../../consts';
import { setSize } from '../../store/actions';
import { LOGOUT_USER, REMOVE_FROM_CART, REMOVE_FROM_WHISHES, REMOVE_ORDER } from '../../store/actionTypes';
import { ApplicationState } from '../../store/rootReducer';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState)  => state.lang);
  const profileName = useSelector((state: ApplicationState)  => state.profile.name);
  const profileOrders = useSelector((state: ApplicationState)  => state.profile.orders);
  const profileWishes = useSelector((state: ApplicationState)  => state.profile.wishes);
  //console.log(profileOrders);

  
  let logInMessage = (lang.value === 'eng')? 'Log in to your account': 'Вход в личный кабинет';
  return(
  <div className="profile-wrapper p-4">
    <div className="profile-name p-2">
      <div>{(lang.value === 'eng')? 'Welcome to your profile': 'Добро пожаловать в личный кабинет'}</div>
      <div>{profileName}</div>
    </div>
    <a href='/'>
      <button className="log-out" onClick={() => {dispatch({type: LOGOUT_USER})}}>
        <p>{(lang.value === 'eng')? 'Log out': 'Выxод'}</p>
      </button>
    </a>
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
        {profileOrders.map((order) => {
          return (
            <tr key={order.orderId}>
              <td className="">{order.orderId}</td>
              <td className="">{order.orderData}</td>
              <td className="">{order.total}</td>
              <td>{(lang.value === 'eng')? ' processed': 'cборка'}</td>
              <td onClick={() => {dispatch({type: REMOVE_ORDER, orderId: order.orderId})}}><img className="trashbin" src="./assets/images/trashbin.ico"/></td>
            </tr>
          )
        })}
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
        </tr>
      </thead>
      <tbody>
        {profileWishes.map((wish => {
          const imageUrl = backendServer + wish.imageUrl;
          return(
            <tr key={wish._id}>
              <td>
              <Link to={`/card?id=${wish._id}`} 
              onClick={()=> {dispatch(setSize((lang.value === 'eng')? 'SIZE': 'РАЗМЕР'))}} 
              >
                <img className="wishes-image" src={imageUrl}/>
              </Link> 
              </td>
              <td>{(lang.value === 'eng')? wish.titleEng: wish.titleRu}</td>
              <td></td>
              <td>{wish.price}</td>
              <td onClick={() => {dispatch({type: REMOVE_FROM_WHISHES, wish: {_id: wish._id}})}}><img className="trashbin" src="./assets/images/trashbin.ico"/></td>
            </tr>
          )}))}
      </tbody>
    </table>
  </div>)}