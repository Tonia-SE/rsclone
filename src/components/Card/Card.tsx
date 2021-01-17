import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../../consts';
import { ApplicationState } from '../../redux/rootReducer';
import {Redirect} from 'react-router-dom';
import { addPosition, setSize } from '../../redux/actions';

const Card: React.FC = () => {

  const card = useSelector((state: ApplicationState)  => state.card)
  const currentPositions = useSelector((state: ApplicationState)  => state.shopCart.positions)
  const dispatch = useDispatch();
  //const classColor = `${album.color} pt-5`;

  //const loading = useSelector(state => state.app.loading)

  const imageUrl = backendServer + card.info.imageUrl
  //console.log(imageUrl)

  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  let priceCurrent = `${card.info.price} ${currency.value}`
  if (currency.value !== '$') {
    const price = Math.round((Math.trunc(card.info.price * currency.rate)/100)) * 100 - 1
    priceCurrent = `${price} ${currency.value}`
  }
  // if (currency.value !== '$') {
  //   priceCurrent = `${Math.round((Math.trunc(parseFloat(card.price) * currency.rate)/100)) * 100 - 1} ${currency.value}`
  // }
  return ( 
    <div className="page_wrapper">         
      <div className="card mb-4 shadow-sm single-card mt-4">
        <small className="text-muted" id="star">
          ☆
        </small>
        <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top single-card_img" />
        <div className="card-body">
          <small className="text-muted price mb-3" id="price">
            {priceCurrent}
          </small>
          <p className="card-text">{card.info.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mb-3">
              {/* <a className="buttonBuy" href="/"> */}
                <button className="btn btn-sm btn-outline-secondary card_btn-BUY" id={card.info._id} type="button"
                  onClick={() => {dispatch(addPosition(card.info._id, card.currentSize, currentPositions))}
                  }>
                  BUY
                </button>
              {/* </a>   */}
              {/* <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-quantity">
                <span className="button_span left" id={card.info._id} onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                  –
                </span>
                <span id={card.info._id}>0</span>
                <span className="button_span right" id={card.info._id} onClick={(event) => {
                  event.currentTarget.getAttribute("id")}}>
                  +
                </span>
              </button> */}
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown card_btn-sizes"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button">
                {card.currentSize}
              </button>
              <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
                {card.info.amount.map((element) => {
                  return (
                    <div className="dropdown-item sizeItem" key={element[0]} id={card.info._id} 
                    onClick={(event) => { 
                      dispatch(setSize(event.currentTarget.textContent))}}>
                      {element[0]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>  
  );
};

export default Card;
