import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SET_CURRENCY } from '../../redux/actionTypes';
import { ApplicationState } from '../../redux/rootReducer';
import { changeLang, setCurrency, toggleNavbarDropdownMenu } from '../../redux/actions'
import { IPosition } from '../../redux/shoppingCartReducer';

export const Navbar: React.FC = () => {

  const dispatch = useDispatch();
  const shopCart = useSelector((state: ApplicationState)  => state.shopCart);
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let qty = 0;
  if (shopCart.positions.length !== 0) {
    qty = shopCart.positions.map((position) => position.quantity).reduce((a, b)=> a + b)
  }
  if(lang.value === 'eng') {
    return (
      <div className="header">
        <div className="navbar navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img id="logo" src="./assets/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            KIGURUMI me
          </a>
        <div className="navWrapper">
        <div className="navbar navbar-expand-sm padding-none navbar-light bg-light">
          <ul className="navbar-nav row-direction mr-auto"> 
            <li className="nav-item active">
              <div className="shoppingCard-wrapper">
                <Link to='/shopping_cart'>
                  <div className="nav-link">
                    <img className="shoppingCart add-width" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
                  </div>
                </ Link> 
                <div className="shoppingCard-quantity">
                  <span id="shoppingCard-quantity">{qty}</span>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#logInModal">
                Log in
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#signUpModal">
                Sign up
              </a>
            </li>
            <li className="nav-item active d-none">
              <a className="nav-link add-font-size" href="/">
                Log out
              </a>
            </li>
          </ul>
        </div>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                About us<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://boxberry.ru/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                Delivery
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contacts
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <a className="dropdown-item" href="https://www.google.ru/maps" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  Address
                </a>
                <a className="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  E-mail
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://pay.google.com/intl/ru_ru/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                Payment
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shopping in
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('ru'))
                  dispatch(setCurrency('₽'))}}>
                  Russia
                  <img id="Russia" src="./assets/images/russiaFlag.ico" alt="Russia flag"/>
                </div>
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('eng'))
                  dispatch(setCurrency('$'))}}>
                  USA
                  <img id="USA" src="./assets/images/UnitedStatesFlag.ico" alt="USA flag"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )} else {
    return (
      <div className="header">
        <div className="navbar navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img id="logo" src="./assets/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            KIGURUMI me
          </a>
        <div className="navWrapper">
        <div className="navbar navbar-expand-sm padding-none navbar-light bg-light">
          <ul className="navbar-nav row-direction mr-auto"> 
            <li className="nav-item active">
              <div className="shoppingCard-wrapper">
                <Link to='/shopping_cart'>
                  <div className="nav-link">
                    <img className="shoppingCart add-width" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
                  </div>
                </ Link> 
                <div className="shoppingCard-quantity">
                  <span id="shoppingCard-quantity">{qty}</span>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#logInModal">
                Войти
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link add-font-size" href="/" data-toggle="modal" data-target="#signUpModal">
                Зарегистрироваться
              </a>
            </li>
            <li className="nav-item active d-none">
              <a className="nav-link add-font-size" href="/">
                Выйти
              </a>
            </li>
          </ul>
        </div>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                О нас<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://boxberry.ru/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                Доставка
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Контакты
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <a className="dropdown-item" href="https://www.google.ru/maps" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  Адрес
                </a>
                <a className="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                  Электронная почта
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://pay.google.com/intl/ru_ru/about/" target="blank" onClick={()=>{toggleNavbarDropdownMenu()}}>
                Оплата
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Страна
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('ru'))
                  dispatch(setCurrency('₽'))}}>
                  Россия
                  <img id="Russia" src="./assets/images/russiaFlag.ico" alt="Russia flag"/>
                </div>
                <div className="dropdown-item country" onClick={() => {
                  toggleNavbarDropdownMenu()
                  dispatch(changeLang('eng'))
                  dispatch(setCurrency('$'))}}>
                  США
                  <img id="USA" src="./assets/images/UnitedStatesFlag.ico" alt="USA flag"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )}
}