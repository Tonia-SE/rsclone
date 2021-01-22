import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../../redux/rootReducer';
import { changeLang, setCurrency, setSize, showAlert, toggleNavbarDropdownMenu } from '../../redux/actions'
import { LogInForm } from '../Regforms/Regforms';


export const Navbar: React.FC = () => {

  const dispatch = useDispatch();
  //dispatch(fetchCategories());
  //dispatch(chooseCategory(initialCategoryName));


  const shopCart = useSelector((state: ApplicationState)  => state.shopCart);
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let logIn = (lang.value === 'eng')? 'Login': 'Вход';
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

  const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="header"  onClick={() => {toggleNavbarDropdownMenu()}}>
      <LogInForm />
      <div className="navbar navbar-light bg-light pt-2 pb-2">
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
        aria-label="Toggle navigation">
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
        aria-label="Toggle navigation">
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
            <a className="nav-link add-font-size" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">
              {aboutUs}<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item react-link">
            <Link to='/delivery'>
              <div className="nav-link add-font-size active delivery-link">
                {delivery}
              </div>  
            </ Link>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle add-font-size" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {contacts}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
              <a className="dropdown-item" href="https://www.google.ru/maps" target="blank">
                {address}
              </a>
              <a className="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank">
                {email}
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link add-font-size" href="https://pay.google.com/intl/ru_ru/about/" target="blank">
              {payment}
            </a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle add-font-size" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {shoppingIn}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
              <div className="dropdown-item country" onClick={() => {
                dispatch(changeLang('ru'))
                dispatch(setCurrency('₽'))
                dispatch(setSize("РАЗМЕР"))}}>
                {ru}
                <img id="Russia" src="./assets/images/russiaFlag.ico" alt="Russia flag"/>
              </div>
              <div className="dropdown-item country" onClick={() => {
                dispatch(changeLang('eng'))
                dispatch(setCurrency('$'))
                dispatch(setSize("SIZE"))}}>
                  {eng}
                <img id="USA" src="./assets/images/UnitedStatesFlag.ico" alt="USA flag"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>)
}