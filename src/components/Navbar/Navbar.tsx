import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SET_CURRENCY } from '../../redux/actionTypes';
import { ApplicationState } from '../../redux/rootReducer';
import { changeLang, setCurrency, setSize, toggleNavbarDropdownMenu } from '../../redux/actions'
import { IPosition } from '../../redux/shoppingCartReducer';

export const Navbar: React.FC = () => {

  const dispatch = useDispatch();
  const shopCart = useSelector((state: ApplicationState)  => state.shopCart);
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let logIn = (lang.value === 'eng')? 'Login': 'Войти в личный кабинет';
  let signup = (lang.value === 'eng')? 'Sign up': 'Регистрация';
  let logOut = (lang.value === 'eng')? 'Log out': 'Выйти';
  let aboutUs = (lang.value === 'eng')? 'About us': 'О нас';
  let delivery = (lang.value === 'eng')? 'Delivery': 'Доставка';
  let contacts = (lang.value === 'eng')? 'Contacts': 'Контакты';
  let address = (lang.value === 'eng')? 'Address': 'Адрес';
  let email = (lang.value === 'eng')? 'E-mail': 'Адрес электронной почты';
  let payment = (lang.value === 'eng')? 'Payment': 'Оплата';
  let shoppingIn = (lang.value === 'eng')? 'Shopping in': 'Страна';
  let ru = (lang.value === 'eng')? 'Russia': 'Россия';
  let eng = (lang.value === 'eng')? 'USA': 'США';
  let qty = 0;
  if (shopCart.positions.length !== 0) {
    qty = shopCart.positions.map((position) => position.quantity).reduce((a, b)=> a + b)
  }
  
    return (
      <div className="header">
        <div className="navbar navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img id="logo" src="./assets/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            KIGURUMI me
          </a>
        <div className="navWrapper">
        <div className="navbar navbar-expand-sm padding-none">
          <ul className="navbar-nav row-direction mr-auto"> 
            <li className="nav-item active">
              <div className="shoppingCard-wrapper">
                <Link to='/shopping_cart'>
                  <div className="nav-link" id="shoppingCart">
                    <img className="shoppingCart add-width" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
                  </div>
                </ Link> 
                <div className="shoppingCard-quantity">
                  <span id="shoppingCard-quantity">{qty}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          id="icon1"
          data-toggle="collapse"
          data-target="#navbarSupportedRegForms"
          aria-controls="navbarSupportedRegForms"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>{toggleNavbarDropdownMenu()}}>
          <img id="auth" src="./assets/images/authorization.ico" alt="Authorization"/>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          id="icon"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>{toggleNavbarDropdownMenu()}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedRegForms">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#logInModal">
                  {logIn}
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#signUpModal">
                  {signup}
                </a>
              </li>
              <li className="nav-item active d-none">
                <a className="nav-link add-font-size" href="/">
                  {logOut}
                </a>
              </li>
            </ul>
          </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                {aboutUs}<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="https://boxberry.ru/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                {delivery}
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle add-font-size" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {contacts}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <a className="dropdown-item" href="https://www.google.ru/maps" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  {address}
                </a>
                <a className="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  {email}
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="https://pay.google.com/intl/ru_ru/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                {payment}
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle add-font-size" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {shoppingIn}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('ru'))
                  dispatch(setCurrency('₽'))}}>
                  {ru}
                  <img id="Russia" src="./assets/images/russiaFlag.ico" alt="Russia flag"/>
                </div>
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('eng'))
                  dispatch(setCurrency('$'))}}>
                    {eng}
                  <img id="USA" src="./assets/images/UnitedStatesFlag.ico" alt="USA flag"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}