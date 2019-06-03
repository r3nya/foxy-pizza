import React from 'react';
import { inject, observer } from 'mobx-react';
import capitalize from 'lodash.capitalize';
import { getSum } from '../utils/getSum';
import AddToppings from './AddToppings';

@inject('order')
@observer
class AddPizza extends React.Component {
  render() {
    const {
      pizzaSizes,
      order: { setSize, selectedPizza },
    } = this.props;

    return (
      <form>
        <h2>
          Add new pizza&nbsp;
          <span role="img" aria-label="Pizza">
            🍕
          </span>
        </h2>
        <div>
          There're {pizzaSizes.length} sizes available (please select one)
          <br />
          <div className="btn-group">
            {pizzaSizes.map((item, index) => (
              <button
                key={index}
                className={`btn btn-primary ${
                  (selectedPizza && selectedPizza.name) !== item.name
                    ? 'btn-ghost'
                    : ''
                }`}
                type="button"
                onClick={() => setSize(item)}
              >
                {capitalize(item.name)} – {getSum(item.basePrice)}
              </button>
            ))}
          </div>
        </div>

        {selectedPizza && selectedPizza.name && <AddToppings />}
      </form>
    );
  }
}

export default AddPizza;
