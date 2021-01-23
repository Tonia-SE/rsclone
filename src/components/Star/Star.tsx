import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStar, removeStar } from '../../store/actions';
import { ICard } from '../../store/albumReducer';
import { ApplicationState } from '../../store/rootReducer';

interface IStarProps {
  id: string
}

export const Star: React.FC<IStarProps> = (props) => {

  const dispatch = useDispatch();
  const cards = useSelector((state: ApplicationState)  => state.album.album.cards);
  const star = cards.find((card:ICard) => {
    if (card._id === props.id) {
      return true;
    }
    return false;    
  })
  if(star !== undefined && star.star) {
    return (
      <small className="text-muted" id="star" onClick={() => dispatch(removeStar(props.id))}>
        ★
      </small>
    )  
  }
  return (
    <small className="text-muted" id="star" onClick={() => dispatch(addStar(props.id))}>
      ☆
    </small>  
  )  
}

