import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../consts';
import { ApplicationState } from '../redux/rootReducer';
//import {useSelector} from 'react-redux'

const Album = () => {

  const album = useSelector((state: ApplicationState)  => state.album.album)
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
            //const cardSizes = Object.entries(card.amount);
            const imageUrl = `${backendServer}${card.imageUrl}`
            //console.log(card.currentSize);
            return (              
                <div className="col-md-4 pt-3" key={card._id}>
                  <div className="card mb-4 shadow-sm" key={card._id}>
                    <small className="text-muted" id="star">
                      ☆
                    </small>
                    <Link to= {{ pathname: '/card', state: card._id}}>
                      <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
                    </Link>
                    <div className="card-body">
                      <small className="text-muted price mb-3" id="price">
                        {card.price}
                      </small>
                      <div className="title-wrapper">
                        <p className="card-text text">{card.title}</p>
                        <Link to='/card'>
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
                              }
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to='/card'>
                            <button className="btn btn-sm btn-outline-secondary card_btn-BUY" id={card._id} type="button" onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                              BUY
                            </button>
                          </Link> */}
                          {/* <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-quantity">
                            <span className="button_span left" id={card._id} onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                              –
                            </span>
                            <span id={card._id}>0</span>
                            <span className="button_span right" id={card._id} onClick={(event) => {
                              event.currentTarget.getAttribute("id")}}>
                              +
                            </span>
                          </button> */}
                          {/* <button
                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown card_btn-sizes"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            type="button">
                            {card.currentSize}
                          </button> */}
                          {/* <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
                            {cardSizes.map((element) => {
                              return (
                                <div className="dropdown-item" key={element[1][0]} id={card._id} 
                                onClick={(event) => { 
                                  event.currentTarget.textContent 
                                  event.currentTarget.getAttribute("id")
                                }}>
                                  {element[1][0]}
                                </div>
                              );
                            })}
                          </div> */}
                        {/* </div>
                      </div> */}
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
