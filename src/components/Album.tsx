import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../consts';
import { fetchCard } from '../redux/actions';
import { ApplicationState } from '../redux/rootReducer';
//import {useSelector} from 'react-redux'

const Album = () => {

  const album = useSelector((state: ApplicationState)  => state.album.album)
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  const classColor = `${album.color} pt-5`;
  const dispatch = useDispatch();


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
            //const cardSizes = Object.entries(card.amount);
            const imageUrl = `${backendServer}${card.imageUrl}`
            let priceCurrent = `${card.price} ${currency.value}`
            if (currency.value !== '$') {
              priceCurrent = `${Math.trunc(parseFloat(card.price) * currency.rate)} ${currency.value}`
            }
            //const priceValue = Math.trunc(parseFloat(card.price) * currency.rate)
            //const priceCurrent = `${priceValue} ${currency.value}`
            return (              
                <div className="col-md-4 pt-3" key={card._id}>
                  <div className="card mb-4 shadow-sm" key={card._id}>
                    <small className="text-muted" id="star">
                      ☆
                    </small>
                    <Link to='/card' id={card._id} onClick={(event)=> {dispatch(fetchCard(event.currentTarget.id))}}>
                      <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
                    </Link>
                    <div className="card-body">
                      <small className="text-muted price mb-3" id="price">
                        {priceCurrent}
                      </small>
                      <div className="title-wrapper">
                        <p className="card-text text">{card.title}</p>      
                        <Link to='/card' onClick={()=> {dispatch(fetchCard(card._id))}}>
                          <button className="btn btn-sm btn-outline-secondary card_btn-BUY" id={card._id} type="button" onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                            BUY
                          </button>
                        </Link>
                      </div>
                      {/* <Link to={{
                            pathname: "/search",
                            propsSearch: myData
                        }}>Ссылка</ Link>


                              На странице "/search" данные можно достать так:

                              import React from 'react';
                              import {Redirect} from 'react-router-dom';

                              export default function Search(props) {
                                console.log(props.location.propsSearch); // Наши переданные данные
                                //Но учтите, что они будут доступны только, при переходе по этой ссылке. 
                                //Если страницу перезагрузить, то получим - undefined. 
                                //Это решается редиректом обратно, если нет пропса:
                                  if (!props.location.propsSearch) return <Redirect to="/firstpage" />;
                              ...
                              }*/}
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

export default Album;
