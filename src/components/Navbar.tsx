import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">
          <img id="logo" src="./assets/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          KIGURUMI me
        </a>
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
                <a className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.google.android.dialer&amp;hl=ru&amp;gl=US" target="blank">
                  Support
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
            <li className="nav-item active">
              <a className="nav-link" href="/" data-toggle="modal" data-target="#logInModal">
                Log in
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/" data-toggle="modal" data-target="#signUpModal">
                Sign up
              </a>
            </li>
            <li className="nav-item active none">
              <a className="nav-link" href="/">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
