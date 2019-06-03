import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { inject, observer } from 'mobx-react';
import { getSum } from '../utils/getSum';
import { GET_TOPPINGS_QUERY } from '../queries';
import Error from './Error';
import ToppingItem from './ToppingItem';

@inject('order', 'cart')
@observer
class AddToppings extends Component {
  handleAddItem = event => {
    event.preventDefault();

    const { addItem } = this.props.cart;
    const { selectedPizza, selectedToppings, price, clean } = this.props.order;

    addItem({
      name: selectedPizza.name,
      price,
      toppings: selectedToppings,
    });

    clean();
  };

  render() {
    const { selectedPizza, price, maxToppingsReached } = this.props.order;

    return (
      <Query
        key={selectedPizza.name}
        query={GET_TOPPINGS_QUERY}
        variables={{
          pizzaSize: selectedPizza.name.toUpperCase(),
        }}
      >
        {({ loading, error, data }) => (
          <>
            {error && <Error error={error} />}

            {loading && <div className="loading" />}

            {!loading && data && data.pizzaSizeByName && (
              <>
                <h3>
                  Please select topping for your {selectedPizza.name} pizza
                </h3>

                {data.pizzaSizeByName.toppings.map(
                  ({ topping: { name, price }, defaultSelected }) => (
                    <div key={name}>
                      <ToppingItem
                        name={name}
                        price={price}
                        defaultSelected={defaultSelected}
                      />
                    </div>
                  ),
                )}

                <br />

                {maxToppingsReached && (
                  <p className="alert alert-warning">
                    You've reached the maximum number of toppings for{' '}
                    {selectedPizza.name} pizzas ({selectedPizza.maxToppings}).
                  </p>
                )}

                <div>
                  <h4>Cost: {getSum(price)}</h4>

                  <button
                    className="btn btn-success"
                    onClick={this.handleAddItem}
                  >
                    Add to cart
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </Query>
    );
  }
}

export default AddToppings;
