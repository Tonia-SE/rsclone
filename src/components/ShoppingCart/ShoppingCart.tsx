import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backendServer } from '../../consts';
import { ApplicationState } from '../../redux/rootReducer';
import { IPosition } from '../../redux/shoppingCartReducer';
import { fetchCard, removeFromCart, setQuantity } from '../../redux/actions';
import { ICardState } from '../../redux/cardReducer';
import { Link } from 'react-router-dom';

interface IShoppingCartProps {
  goods: Array<string>
}

const ShoppingCart: React.FC = () => {
  //const loading = useSelector(state => state.app.loading)
  const dispatch = useDispatch();
  const cart = useSelector((state: ApplicationState)  => state.shopCart)
  const currency = useSelector((state: ApplicationState) => state.currency.info)
  const totalOrderPrice: Array<number> = [];
  
  const countTotal = () => {
    const total = totalOrderPrice.reduce((a, b) => a + b);  
    let res = `${total} ${currency.value}`
    if (currency.value === '$') {
      res = `${total.toFixed(2)} ${currency.value}`
    }    
    return res
  }
  
  if (cart.positions.length === 0) {
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
      <div className="table-wrapper">
        <table className="table mt-4 mb-4">
          <thead className="light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Size</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          { cart.positions.map((position: IPosition) => {
            const imageUrl = backendServer + position.imageUrl;
            let total = '';
            if (currency.value !== '$') {
              const totalPrice = (Math.round((Math.trunc(position.price * currency.rate)/100)) * 100 - 1) * position.quantity;
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
              <Link to='/card' id={position.id}>
                <img className="shoppingCart-image" src={imageUrl}/>
              </Link>
              </td>
              <td className="align-middle">{position.title}</td>
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
                        dispatch(removeFromCart(key))
                      }}>
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
                  Total:
                </div>
              </td>
              <td className="align-middle total-price">{countTotal()}</td>
              <td className="align-middle center">
                <button className="btn checkout">
                CHECKOUT
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default ShoppingCart;
