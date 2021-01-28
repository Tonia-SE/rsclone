import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../../consts';
import { setSize } from '../../store/cardReducer';
import { REMOVE_FROM_WHISHES } from '../../store/actionTypes';
import { ApplicationState } from '../../store/rootReducer';

export const TableWishes: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState) => state.lang);
  const profileWishes = useSelector((state: ApplicationState) => state.profile.wishes);
  const currency = useSelector((state: ApplicationState) => state.currency.info);

  return profileWishes.length > 0 ? (
    <table className="table table-hover responsive mb-5">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">{lang.value === 'eng' ? 'Title' : 'Модель'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Size' : 'Размер'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Price' : 'Цена'}</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {profileWishes.map((wish) => {
          const imageUrl = backendServer + wish.imageUrl;
          let price = +wish.price;
          if (currency.value !== '$') {
            price = Math.trunc(+wish.price * currency.rate);
          }
          return (
            <tr className="tr-hover" key={`${wish.id}${wish.size}`}>
              <td>
                <img className="wishes-image" src={imageUrl} />
              </td>
              <td>{lang.value === 'eng' ? wish.titleEng : wish.titleRu}</td>
              <td>{wish.size}</td>
              <td>
                {price} {currency.value}
              </td>
              <td
                className="txt-right"
                onClick={() => {
                  dispatch({ type: REMOVE_FROM_WHISHES, wish: { id: wish.id, size: wish.size } });
                }}>
                <img className="trashbin mr-4" src="./assets/images/trashbin.ico" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <table className="table table-hover responsive mb-3">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">{lang.value === 'eng' ? 'Title' : 'Модель'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Size' : 'Размер'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Price' : 'Цена'}</th>
          <th scope="col"></th>
        </tr>
      </thead>
    </table>
  );
};
