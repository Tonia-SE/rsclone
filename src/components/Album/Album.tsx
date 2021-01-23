import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../../consts';
import { setSize } from '../../store/actions';
import { ApplicationState } from '../../store/rootReducer';
import { Star } from '../Star/Star';

const Album = () => {

  const dispatch = useDispatch();
  const album = useSelector((state: ApplicationState)  => state.album)
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  const language = useSelector((state: ApplicationState)  => state.lang)
  const btnClassName = `btn btn-sm btn-outline-secondary card_btn-buy-${album.album.color}`
  let buyBtn = (language.value === 'eng')? 'BUY': 'КУПИТЬ'
  let currentSize = (language.value === 'eng')? 'SIZE': 'РАЗМЕР'
  //const loading = useSelector(state => state.app.loading)

  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }
  if (album.show) {
    return (
      <div className={`${album.album.color} pt-5`}>
        <div className="container">
          <div className="row">
            {album.album.cards.map((card) => {
              const imageUrl = `${backendServer}${card.imageUrl}`
              let priceCurrent = `${card.price} ${currency.value}`
              let title = (language.value === 'eng')? card.titleEng: card.titleRu;
              if (currency.value !== '$') {
                priceCurrent = `${Math.trunc(parseFloat(card.price) * currency.rate)} ${currency.value}`
              }
              return (              
                <div className="col-md-4 pt-3" key={card._id}>
                  <div className="card mb-4 shadow-sm" key={card._id}>                    
                    <Star id={card._id}/>
                    <Link to={`/card?id=${card._id}`} onClick={()=> { dispatch(setSize(currentSize)) }} >
                      <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
                    </Link>
                    <div className="card-body">
                      <small className="text-muted price mb-3" id="price">
                        {priceCurrent}
                      </small>
                      
                        <p className="card-text text mb-2">{title}</p>      
                        <Link to={`/card?id=${card._id}`} 
                          onClick={()=> { dispatch(setSize(currentSize)) }}>
                          <button className={btnClassName} id={card._id} type="button">
                            {buyBtn}
                          </button>
                        </Link>
                    </div>
                  </div>
                </div>              
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return(<></>)
  }
};

export default Album;