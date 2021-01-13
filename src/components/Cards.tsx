import React from 'react';
import { useSelector } from 'react-redux';
import { backendServer } from '../consts';
import { ApplicationState } from '../redux/rootReducer';
//import {useSelector} from 'react-redux'

interface ICard {
  id: number;
  imageUrl: string;
  title: string;
  amount: { S: number; M: number; L: number; XL: number };
  price: number;
}

const Cards = () => {

  // const cards: Array<ICard> = [
  //   {
  //     id: 10,
  //     imageUrl: `${backendServer}/static/images/adult/adult_1.jpg`,
  //     title: 'Rainbow bear',
  //     amount: { S: 5, M: 3, L: 5, XL: 10 },
  //     price: 10.99,
  //   },
  //   {
  //     id: 11,
  //     imageUrl: `${backendServer}/static/images/adult/adult_2.jpg`,
  //     title: 'Crocodile',
  //     amount: { S: 2, M: 0, L: 7, XL: 9 },
  //     price: 8.99,
  //   },
  //   {
  //     id: 12,
  //     imageUrl: `${backendServer}/static/images/adult/adult_3.jpg`,
  //     title: 'Pink dinosaur',
  //     amount: { S: 8, M: 10, L: 8, XL: 10 },
  //     price: 9.99,
  //   },
  // ];
  //const color = 'adult';
  //const color = useSelector(state => state.cards.color)

  const album = useSelector((state: ApplicationState)  => state.cards.album)
  const classColor = `${album.color} pt-5`;

  //const loading = useSelector(state => state.app.loading)

  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }

  return (
    <div className={classColor}>
      <div className="container">
        <div className="row">
          {album.cards.map((card) => {
            const cardSizes = Object.entries(card.amount);
            const imageUrl = `${backendServer}${card.imageUrl}`
            return (
              <div className="col-md-4 pt-3" key={card.id}>
                <div className="card mb-4 shadow-sm" key={card.id}>
                  <small className="text-muted" id="heart">
                    ☆
                  </small>
                  <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
                  <div className="card-body">
                    <small className="text-muted price" id="price">
                      {card.price}
                    </small>
                    <p className="card-text">{card.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-BUY">
                          BUY
                        </button>
                        <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-quantity">
                          <span className="button_span" id="left">
                            –
                          </span>
                          <span id="number">0</span>
                          <span className="button_span" id="right">
                            +
                          </span>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          type="button"
                          id="card_btn-sizes">
                          SIZE
                        </button>
                        <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
                          {cardSizes.map((element) => {
                            return (
                              <a className="dropdown-item" href="/" key={element[0]}>
                                {element[0]}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
