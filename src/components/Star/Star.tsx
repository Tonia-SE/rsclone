import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../store/profileReducer';
import { showAlert } from '../../store/messageReducer';
import { ApplicationState } from '../../store/rootReducer';
import { REMOVE_FROM_WHISHES } from '../../store/actionTypes';
import { IPosition } from '../../store/shoppingCartReducer';

interface IStarProperties {
  id: string;
}

export const Star: React.FC<IStarProperties> = (properties) => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState) => state.lang);
  const messageTextAdd = lang.value === 'eng' ? 'Added to whish list' : 'Товар добавлен в избранное';
  const messageTextDelete = lang.value === 'eng' ? 'Removed from whish list' : 'Товар удален из избранного';
  const currentSize = useSelector((state: ApplicationState) => state.card.currentSize);
  const currentProfile = useSelector((state: ApplicationState) => state.profile);
  const auth = useSelector((state: ApplicationState) => state.auth);
  const wish = currentProfile.wishes.find((wish: IPosition) => {
    if (wish.id === properties.id && wish.size === currentSize) {
      return true;
    }
    return false;
  });
  console.log(currentProfile.wishes);
  console.log(wish);
  if (wish !== undefined) {
    return (
      <>
        <div
          className="text-muted"
          id="star"
          onClick={() => {
            dispatch(showAlert(messageTextDelete, 'my-danger'));
            dispatch({ type: REMOVE_FROM_WHISHES, wish: { id: properties.id, size: currentSize } });
          }}>
          ★
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="text-muted"
        id="star"
        onClick={() => {
          if (auth.isLoggedIn) {
            if (currentSize.trim() === '' || currentSize === null || currentSize === undefined || currentSize === 'SIZE' || currentSize === 'РАЗМЕР') {
              dispatch(showAlert(lang.value === 'eng' ? 'Choose a size' : 'Выберите размер'));
            } else {
              dispatch(addToWishList(auth.userName, properties.id, currentSize, currentProfile.wishes, lang.value));
              dispatch(showAlert(messageTextAdd, 'my-success'));
            }
          } else {
            dispatch(showAlert(lang.value === 'eng' ? 'Log in first, please' : 'Войдите в личный кабинет'));
          }
        }}>
        ☆
      </div>
    </>
  );
};
