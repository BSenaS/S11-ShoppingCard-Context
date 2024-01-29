import React from 'react';
import { ScCartItem, ScCartItemDetails } from './scParts';
import { useCart } from '../contexts/CartContext';

const Item = (props) => {
  const { removeItem } = useCart();
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.order)}>
          Remove from cart
        </button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
