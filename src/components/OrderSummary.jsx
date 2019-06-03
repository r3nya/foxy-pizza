import React from 'react';
import { Query } from 'react-apollo';
import { GET_PIZZA_SIZES_QUERY } from '../queries';
import AddPizza from './AddPizza';
import Error from './Error';
import Cart from './Cart';

const OrderSummary = () => (
  <Query query={GET_PIZZA_SIZES_QUERY}>
    {({ loading, error, data }) => (
      <div className="grid">
        <div className="cell -4of12">
          <Cart />
        </div>

        <div className="cell -8of12">
          {loading && <div className="loading" />}

          {error && <Error error={error} />}

          {data && data.pizzaSizes && <AddPizza pizzaSizes={data.pizzaSizes} />}
        </div>
      </div>
    )}
  </Query>
);

export default OrderSummary;
