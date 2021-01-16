import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="container-fluid text-center text-md-left pt-3 page-footer">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3 pl-4" id="text-column-1">
          <h5>KIGURUMI me</h5>
          <p>
            A costumed character wears a costume that usually (but not always) covers the performer's face. These range from theme park "walk-around" or "meetable" characters, the
            mascots of corporations, schools, or sports teams to novelty act performers. Some costumes cover the performer's face; others, especially those in theme parks, may
            leave the performer's face visible.
          </p>
        </div>
        <div className="col-md-3 mb-md-0 mb-3" id="text-column-2">
          <h5 className="text-uppercase">Contacts</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.google.com/intl/ru/gmail/about/" target="blank">
                www.google.com
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.android.dialer&hl=ru&gl=US" target="blank">
                +7-499-951-84-43
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3" id="text-column-3">
          <h5>KIGURUMI me</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">
                About us: we are awesome!!!
              </a>
            </li>
            <li>
              <a href="https://boxberry.ru/" target="blank">
                Delivery: Anywhere you wish
              </a>
            </li>
            <li>
              <a href="https://pay.google.com/intl/ru_ru/about/" target="blank">
                Payment: by card
              </a>
            </li>
            <li>
              <a
                href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BD%D0%BA_%D0%A8%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D0%B8%D0%B8"
                target="blank">
                Warranty: 100%
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-left py-3">
        <div className="inline">
          © 2021 Copyright:
          <a href="https://github.com/Tonia-SE" target="blank">
            https://github.com/Tonia-SE
          </a>
        </div>
      </div>
    </div>
  );
};
