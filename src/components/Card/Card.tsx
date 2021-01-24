import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backendServer } from '../../consts';
import { ApplicationState } from '../../store/rootReducer';
import { addPosition, setSize, showAlert } from '../../store/actions';
import { Message } from '../Message/Message';
import { Star } from '../Star/Star';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Card: React.FC = () => { 
  const cardId = useQuery().get('id');

  const dispatch = useDispatch();
  const currentSize = useSelector((state: ApplicationState)  => state.card.currentSize)
  const cards = useSelector((state: ApplicationState)  => state.album.album.cards)
  // const category = useSelector((state: ApplicationState)  => state.card.category)

  // const pageClassName =`page_wrapper card-bg-color-${category}`
  // const btnBuyClassName =`btn btn-outline-secondary my-padding card_btn-buy-${category}`
  // const btnSizeClassName =`btn btn-outline-secondary dropdown-toggle dropdown my-padding card_btn-sizes-${category}`
  let card = cards.find(card => {
    if (card._id === cardId) {
      return true
    }
    return false
  })
  
  const currentPositions = useSelector((state: ApplicationState)  => state.shopCart.positions)
  const lang = useSelector((state: ApplicationState)  => state.lang)
  const titleEng = card.titleEng;
  const titleRu = card.titleRu;
  let buyBtn = (lang.value === 'eng')?'BUY': 'КУПИТЬ'
  //const loading = useSelector(state => state.app.loading)
  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }
  const imageUrl = backendServer + card.imageUrl
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  let priceCurrent = `${card.price} ${currency.value}`
  if (currency.value !== '$') {
    priceCurrent = `${Math.trunc(+ card.price * currency.rate)} ${currency.value}`
  }
  return ( 
    <div className="page_wrapper card-bg-color">         
      <div className="card mb-4 shadow-sm single-card mt-4">
        <Star id={card._id}/>
        <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top single-card_img" />
        <div className="card-body">
          <small className="text-muted price mb-3" id="price">
            {priceCurrent}
          </small>
          <p className="card-text cd-txt">{(lang.value === 'eng')? titleEng: titleRu}</p>
          <Message {...{className: "my-danger"}}/>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mt-2 mb-3">
              <button className="btn btn-outline-secondary card_btn-buy my-padding" id={card._id} type="button"
                  onClick={() => {
                    if(currentSize.trim() === "" || currentSize === null || currentSize === undefined) {
                      dispatch(showAlert((lang.value === 'eng')? "Choose a size": "Выберите размер"))
                      
                    } else {
                      dispatch(addPosition(card._id, currentSize, currentPositions, lang.value))
                    }
                  }}
                  >
                {buyBtn}
              </button>
              <button
                className="btn btn-outline-secondary dropdown-toggle dropdown card_btn-sizes my-padding"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button">
                {currentSize}
              </button>
              <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
                {card.amount.map((element) => {
                  return (
                    <div className="dropdown-item sizeItem" key={element[0]} id={card._id} 
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
