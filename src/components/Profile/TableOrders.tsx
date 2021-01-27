import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ORDER } from '../../store/actionTypes';
import { ApplicationState } from '../../store/rootReducer';

export const TableOrders: React.FC = () => {
  
  const dispatch = useDispatch();
  const lang = useSelector((state: ApplicationState) => state.lang);
  const profileOrders = useSelector((state: ApplicationState) => state.profile.orders);

  return profileOrders.length > 0 ? (
    <table className="table table-hover responsive mb-3">
      <thead>
        <tr>
          <th scope="col">{lang.value === 'eng' ? '№' : '№'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Date' : 'Дата'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Total' : 'Сумма'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Status' : 'Статус'}</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {profileOrders.map((order) => {
          return (
            <tr className="tr-hover" key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.orderData}</td>
              <td>{order.total}</td>
              <td>{lang.value === 'eng' ? ' processed' : 'cборка'}</td>
              <td
                className="txt-right"
                onClick={() => {
                  dispatch({ type: REMOVE_ORDER, orderId: order.orderId });
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
          <th scope="col">{lang.value === 'eng' ? '№' : '№'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Date' : 'Дата'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Total' : 'Сумма'}</th>
          <th scope="col">{lang.value === 'eng' ? 'Status' : 'Статус'}</th>
          <th scope="col"></th>
        </tr>
      </thead>
    </table>
  );
};