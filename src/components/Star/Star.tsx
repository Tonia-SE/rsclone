import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStar, removeStar, showAlert } from '../../store/actions';
import { ICard } from '../../store/albumReducer';
import { ApplicationState } from '../../store/rootReducer';
import { ADD_TO_WHISHES, REMOVE_FROM_WHISHES, SET_NAME } from '../../store/actionTypes';

interface IStarProps {
  id: string
}

export const Star: React.FC<IStarProps> = (props) => {

  const dispatch = useDispatch();
  const cards = useSelector((state: ApplicationState)  => state.album.album.cards);
  const lang = useSelector((state: ApplicationState)  => state.lang);
  const messageTextAdd = (lang.value === 'eng')? "Added to whish list": "Товар добавлен в избранное"
  const messageTextDelete = (lang.value === 'eng')? "Removed from whish list": "Товар удален из избранного"
  const card = cards.find((card:ICard) => {
    if (card._id === props.id) {
      return true;
    }
    return false;    
  })
  if(card !== undefined && card.star) {
    return (
      <>
        <div className="text-muted" id="star" onClick={() =>{
          dispatch(removeStar(props.id))
          dispatch(showAlert(messageTextDelete, "my-danger"))
          dispatch({ type: REMOVE_FROM_WHISHES, wish: {_id: card._id} })}}>
          ★
        </div>
      </>
    )  
  }
  return (
    <>
      <div className="text-muted" id="star" onClick={() => {
                      dispatch(addStar(props.id))
                      dispatch(showAlert(messageTextAdd, "my-success"))
                      dispatch({ type: ADD_TO_WHISHES, wish: card })}}>
        ☆
      </div>
    </> 
  )
}

