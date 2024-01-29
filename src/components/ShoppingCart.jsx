import React from 'react';
import { ScCartCheckout } from './scParts';

import Item from './ShoppingCartItem';
import { useCart } from '../contexts/CartContext';

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useCart();

  /*   const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  }; */

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item key={`${item.id}_${orderInCart}`} order={orderInCart} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
