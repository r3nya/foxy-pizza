import React from 'react';
import { inject, observer } from 'mobx-react';
import { getSum } from '../utils/getSum';

@inject('order')
@observer
class ToppingItem extends React.Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    const { defaultSelected, name, price } = this.props;

    if (defaultSelected) {
      this.handleInputToggle({ name, price });
    }
  }

  handleInputToggle = props => {
    const { checked } = this.state;
    const { toggleTopping, maxToppingsReached } = this.props.order;

    if ((maxToppingsReached && checked) || !maxToppingsReached) {
      this.setState({ checked: !checked });
      toggleTopping(props);
    }
  };

  render() {
    const {
      name,
      price,
      order: { maxToppingsReached, selectedToppings },
    } = this.props;

    const { checked } = this.state;

    return (
      <>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={!selectedToppings[name] && maxToppingsReached}
          onChange={() => this.handleInputToggle({ name, price })}
        />
        <label htmlFor={name}>
          {name} – {getSum(price)}
        </label>
      </>
    );
  }
}

export default ToppingItem;
