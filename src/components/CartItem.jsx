import React from 'react';
import capitalize from 'lodash.capitalize';
import { getSum } from '../utils/getSum';

const CartItem = ({ name, price, toppings, onRemoveHandler }) => {
  return (
    <div className="grid">
      <div className="cell -8of12 media">
        <div className="media-body">
          <div className="media-heading">
            {capitalize(name)} – {getSum(price)}
          </div>
          <div className="media-content">
            {Object.keys(toppings).join(', ')}
          </div>
        </div>
      </div>

      <div className="cell -4of12 -right">
        <button className="btn btn-error btn-ghost" onClick={onRemoveHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
