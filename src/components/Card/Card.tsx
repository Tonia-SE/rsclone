import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../../consts';
import { ApplicationState } from '../../redux/rootReducer';
import {Redirect} from 'react-router-dom';
import { addPosition, addStar, setSize, showAlert } from '../../redux/actions';
import { Message } from '../Message/Message';
import { Star } from '../Star/Star';
import { ICard } from '../../redux/albumReducer';

interface ICardProps {
  cardId: string;
}

const Card: React.FC<ICardProps> = (props) => {

  const dispatch = useDispatch();
  const card = useSelector((state: ApplicationState)  => state.card)
  const album = useSelector((state: ApplicationState)  => state.album.album)
  const currentPositions = useSelector((state: ApplicationState)  => state.shopCart.positions)
  const lang = useSelector((state: ApplicationState)  => state.lang)
  let buyBtn = (lang.value === 'eng')?'BUY': 'КУПИТЬ'



  //const loading = useSelector(state => state.app.loading)

  const imageUrl = backendServer + card.info.imageUrl

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
  return ( 
    <div className="page_wrapper">         
      <div className="card mb-4 shadow-sm single-card mt-4">
        <Star id={card.info._id}/>
        <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top single-card_img" />
        <div className="card-body">
          <small className="text-muted price mb-3" id="price">
            {priceCurrent}
          </small>
          <p className="card-text">{card.info.title}</p>
          <Message />
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mb-3">
              {/* <a className="buttonBuy" href="/"> */}
              
              <button className="btn btn-sm btn-outline-secondary card_btn-BUY" id={card.info._id} type="button"
                  onClick={() => {
                    dispatch(addPosition(card.info._id, card.currentSize, currentPositions, lang.value))
                  }
                }>
                {buyBtn}
              </button>
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
                      dispatch(setSize(event.currentTarget.textContent))
                    }}
                      >
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
