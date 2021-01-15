import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../consts';
import { ApplicationState } from '../redux/rootReducer';
//import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom';

interface CardProps {
  _id: string,
  location: { state: { _id: string } } 
}

const Card: React.FC<CardProps> = props => {

  //const card = useSelector((state: ApplicationState)  => state.card.payload)
  //const classColor = `${album.color} pt-5`;

  //const loading = useSelector(state => state.app.loading)

  const imageUrl = backendServer + '/static/images/slippers/slippers_1.jpg'
  console.log(props.location.state['_id'])


  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }
  
  return (          
      <div className="card mb-4 shadow-sm">
        <small className="text-muted" id="star">
          ☆
        </small>
        <img src={imageUrl} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
        {/*<div className="card-body">
          <small className="text-muted price mb-3" id="price">
            {card.price}
          </small>
          <p className="card-text">{card.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary card_btn-BUY" id={card._id} type="button" onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                  BUY
                </button>
              <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-quantity">
                <span className="button_span left" id={card._id} onClick={(event) => {event.currentTarget.getAttribute("id")}}>
                  –
                </span>
                <span id={card._id}>0</span>
                <span className="button_span right" id={card._id} onClick={(event) => {
                  event.currentTarget.getAttribute("id")}}>
                  +
                </span>
              </button>
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown card_btn-sizes"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="button">
                {card.currentSize}
              </button>
              <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
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
              </div>
            </div>
          </div>
        </div> */}
      </div> 
  );
};

export default Card;
