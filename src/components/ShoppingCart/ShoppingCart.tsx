import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backendServer } from '../../consts';
import { ApplicationState } from '../../store/rootReducer';
import { IPosition } from '../../store/shoppingCartReducer';
import { proceedToCheckout, removeFromCart, setQuantity, setSize } from '../../store/actions';
import { Link } from 'react-router-dom';
import { Message } from '../Message/Message';
import { OrderDailog } from '../OrderDailog/OrderDailog'

const ShoppingCart: React.FC = () => {
  //const loading = useSelector(state => state.app.loading)
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: ApplicationState)  => state.shopCart)
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  const auth = useSelector((state: ApplicationState) => state.auth.isLoggedIn)
  const totalOrderPrice: Array<number> = [];
  const colSpanOrder = 1;
  const colSpanMessage = 4;
  const lang = useSelector((state: ApplicationState)  => state.lang);
  let title = (lang.value === 'eng')?'Title': 'Модель'
  let size = (lang.value === 'eng')?'Size': 'Размер'
  let quantity = (lang.value === 'eng')?'Quantity': 'Количество'
  let price = (lang.value === 'eng')?'Price': 'Цена'
  let checkout = (lang.value === 'eng')?'CHECKOUT': 'КУПИТЬ'
  let total = (lang.value === 'eng')?'Total:': 'Сумма:'

  
  const countTotal = () => {
    const total = totalOrderPrice.reduce((a, b) => a + b);  
    let res = `${total} ${currency.value}`
    if (currency.value === '$') {
      res = `${total.toFixed(2)} ${currency.value}`
    }    
    return res
  }
  
  if (cart.positions.length === 0) {
    if(lang.value === 'eng') {
      return (    
        <div className="empty-shoppingCart">
          <div className="empty-shoppingCart_wrapper">
            <img className="shoppingCart add-width big-size" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
            <p className="empty-shoppingCart_message">Your cart is empty...</p>
            <a className="main-page-link" href="/">SHOP NOW</a>
          </div>
        </div>
      )
    } else {
      return (    
        <div className="empty-shoppingCart">
          <div className="empty-shoppingCart_wrapper">
            <img className="shoppingCart add-width big-size" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
            <p className="empty-shoppingCart_message">Ваша корзина пуста...</p>
            <a className="main-page-link" href="/">К ПОКУПКАМ</a>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className="table-wrapper">
        <OrderDailog
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        <table className="table mt-4 mb-4">
          <thead className="light">
            <tr>
              <th scope="col"></th>
              <th scope="col">{title}</th>
              <th scope="col">{size}</th>
              <th scope="col">{quantity}</th>
              <th scope="col">{price}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          { cart.positions.map((position: IPosition) => {
            let positionTitle = (lang.value === 'eng')? position.titleEng: position.titleRu;
            const imageUrl = backendServer + position.imageUrl;
            let total = '';
            if (currency.value !== '$') {
              const totalPrice = (+(position.price * currency.rate).toFixed(0)) * position.quantity;
              totalOrderPrice.push(totalPrice);
              total = `${totalPrice} ${currency.value}`
            } 
            if (currency.value === '$') {
              totalOrderPrice.push(position.quantity * position.price);
              total = `${(position.quantity * position.price).toFixed(2)} ${currency.value}`
            }
          const key = `${position.id}_${position.size}`; 
          return ( 
            <tr key={key} id={key} className="position">
              <td scope="row" className="align-middle">
              <Link to={`/card?id=${position.id}`} onClick={()=> { dispatch(setSize(position.size)) }}>
                <img className="shoppingCart-image" src={imageUrl}/>
              </Link>
              </td>
              <td className="align-middle number">{positionTitle}</td>
              <td className="align-middle number">{position.size}</td>
              <td id="quantity">
                <div className="quantity-wrapper number">
                  {position.quantity}
                  <div className="btn-group column">
                    <div className="dropup">
                      <button type="button" className="btn dropdown-toggle arrow"
                      onClick={() => {
                        dispatch(setQuantity(position.quantity + 1, key))
                        }}>
                      </button>
                    </div>
                    <div>
                    <button type="button" className="btn dropdown-toggle arrow"
                      onClick={() => {
                        dispatch(setQuantity(position.quantity - 1, key))
                      }}>
                    </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="align-middle number">{total}</td>
              <td className="align-middle" onClick={() => {
                        dispatch(removeFromCart(key))}}>
                <div className="center">        
                  <img className="trashbin" src="./assets/images/trashbin.ico"/>
                </div>
              </td>
            </tr> 
            )
          })}
            <tr className="total">
              <td></td>
              <td></td>
              <td></td>
              <td className="align-middle">
                <div className="right">
                  {total}
                </div>
              </td>
              <td className="align-middle total-price">{countTotal()}</td>
              <td className="align-middle center">
              </td>
            </tr>
            <tr className="table-borderless">
              <td colSpan={colSpanMessage} id="shopCart-message">
                <Message />
              </td>
              <td colSpan={colSpanOrder} className="align-middle">
                <button className="btn checkout center" onClick={() => {
                  if(!auth) {
                    dispatch(proceedToCheckout(lang.value))
                  } else {
                    setModalShow(true)}}
                }>
                  {checkout}
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default ShoppingCart;
