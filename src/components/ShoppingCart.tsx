import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backendServer } from '../consts';
import { ApplicationState } from '../redux/rootReducer';
//import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom';

interface IShoppingCartProps {
  goods: Array<string>
}

const ShoppingCart: React.FC<IShoppingCartProps> = props => {

  //const card = useSelector((state: ApplicationState)  => state.card.payload)
  //const classColor = `${album.color} pt-5`;

  //const loading = useSelector(state => state.app.loading)

  const imageUrl = backendServer + '/shopping_cart'
  //console.log(props)


  // if(loading) {
  //     return (
  //         <div classNameName="spinner-border text-primary" role="status">
  //             <span classNameName="sr-only">Loading...</span>
  //         </div>
  //     )
  // }
  
  return (
    <div className="empty-shoppingCart">
      <div className="empty-shoppingCart_wrapper">
        <img className="shoppingCart add-width big-size" src="./assets/images/shopping-cart-empty.svg" alt="shopping cart" />
        <p className="empty-shoppingCart_message">Your cart is empty...</p>
        <a className="main-page-link" href="http://localhost:4000/">SHOP NOW</a>
      </div>
    </div>
  )
};

export default ShoppingCart;
