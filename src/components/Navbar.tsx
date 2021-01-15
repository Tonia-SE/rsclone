import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar navbar navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:4000/">
          <img id="logo" src="./assets/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          KIGURUMI me
        </a>
      <div className="navWrapper">
      <div className="navbar navbar-expand-sm padding-none navbar-light bg-light">
        <ul className="navbar-nav row-direction mr-auto"> 
          <li className="nav-item active">
            <div className="shoppingCard-wrapper">
              <Link to='/shopping_cart'>
                <a className="nav-link" href="/">
                  <img className="shoppingCart add-width" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
                </a>
              </ Link> 
              <div className="shoppingCard-quantity">
                <span id="shoppingCard-quantity">0</span>
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
          <li className="nav-item active none">
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
            <a className="nav-link" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">
              About us<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://boxberry.ru/" target="blank">
              Delivery
            </a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contacts
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
              <a className="dropdown-item" href="https://www.google.ru/maps" target="blank">
                Address
              </a>
              <a className="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank">
                E-mail
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://pay.google.com/intl/ru_ru/about/" target="blank">
              Payment
            </a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sizes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
              <a className="dropdown-item" href="/" target="blank">
                Men
              </a>
              <a className="dropdown-item" href="/" target="blank">
                Women
              </a>
              <a className="dropdown-item" href="/" target="blank">
                Kids
              </a>
              <a className="dropdown-item" href="/" target="blank">
                Shoes
              </a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shopping in
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
              <a className="dropdown-item" href="/" target="blank">
                Russia
                <img id="Russia" src="./assets/images/russiaFlag.ico" alt="Russia flag"/>
              </a>
              <a className="dropdown-item" href="/" target="blank">
                USA
                <img id="USA" src="./assets/images/UnitedStatesFlag.ico" alt="USA flag"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
)};
