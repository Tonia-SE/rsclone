import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../redux/rootReducer';
import { IPosition } from '../../redux/shoppingCartReducer';
import { fetchCard, proceedToCheckout, removeFromCart, setQuantity, setSize, showAlert } from '../../redux/actions';
import { ICardState } from '../../redux/cardReducer';
import { Link } from 'react-router-dom';


// interface IShoppingCartProps {
//   goods: Array<string>
// }

export const Delivery: React.FC = () => {
  //const loading = useSelector(state => state.app.loading)
  
  // const dispatch = useDispatch();
  // const cart = useSelector((state: ApplicationState)  => state.shopCart)
  // const currency = useSelector((state: ApplicationState) => state.currency.info)
  // const totalOrderPrice: Array<number> = [];
  const lang = useSelector((state: ApplicationState)  => state.lang);
  //const card = useSelector((state: ApplicationState)  => state.card)
  // let title = (lang.value === 'eng')?'Title': 'Модель'
  // let size = (lang.value === 'eng')?'Size': 'Размер'
  // let quantity = (lang.value === 'eng')?'Quantity': 'Количество'
  // let price = (lang.value === 'eng')?'Price': 'Цена'
  // let checkout = (lang.value === 'eng')?'CHECKOUT': 'КУПИТЬ'
  // let total = (lang.value === 'eng')?'Total:': 'Сумма:'
  
  // const countTotal = () => {
  //   const total = totalOrderPrice.reduce((a, b) => a + b);  
  //   let res = `${total} ${currency.value}`
  //   if (currency.value === '$') {
  //     res = `${total.toFixed(2)} ${currency.value}`
  //   }    
  //   return res
  // }
  
  
  if(lang.value === 'eng') {
    return (    
      <div className="delivery-free">
        <div className="delivery_wrapper">
          <img className="delivery add-width" src="./assets/images/delivery.ico" alt="delivery truck" />
          <p className="delivery_message_eng">FREE SHIPPING</p>
          <p className="main_delivery">details with checkout</p>
        </div>
      </div>
    )
  } else {
    return (    
      <div className="delivery-free">
        <div className="delivery_wrapper">
          <img className="delivery add-width" src="./assets/images/delivery.ico" alt="delivery truck" />
          <p className="delivery_message">Бесплатная доставка по России</p>
          <p className="main_delivery">подробности при оформлении заказа</p>
        </div>
      </div>
    )
  }
}

