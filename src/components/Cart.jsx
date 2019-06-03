import React from 'react';
import { inject, observer } from 'mobx-react';
import { getSum } from '../utils/getSum';
import CartItem from './CartItem';

const Cart = props => {
  const { items, removeItem } = props.cart;
  const total = getSum(items.reduce((sum, { price }) => sum + price, 0));

  return (
    <>
      <h2>
        Your cart ({total})&nbsp;
        <span role="img" aria-label="Cart">
          🛒
        </span>
      </h2>

      {!items.length && <h4>Your cart is empty</h4>}

      {Boolean(items.length) &&
        items.map((pizza, idx) => (
          <CartItem
            key={idx}
            {...pizza}
            onRemoveHandler={() => removeItem(idx)}
          />
        ))}
    </>
  );
};

export default inject('cart')(observer(Cart));
