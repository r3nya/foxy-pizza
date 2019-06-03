import { action, observable, computed } from 'mobx';

class OrderStore {
  @observable
  selectedPizza;

  @observable
  selectedToppings = {};

  @computed
  get toppingsPrice() {
    let total = 0;

    if (Object.keys(this.selectedToppings).length === 0) {
      return total;
    }

    return Object.values(this.selectedToppings).reduce(
      (sum, price) => (sum += price),
      0,
    );
  }

  @computed
  get price() {
    if (!(this.selectedPizza && this.selectedPizza.basePrice)) {
      return 0;
    }

    return this.selectedPizza.basePrice + this.toppingsPrice;
  }

  @computed
  get toppingsSize() {
    return Object.keys(this.selectedToppings).length;
  }

  @computed
  get maxToppingsReached() {
    if (!this.selectedPizza || this.selectedPizza.maxToppings === null) {
      return false;
    }

    return this.toppingsSize >= this.selectedPizza.maxToppings;
  }

  @action
  setSize = size => {
    this.selectedPizza = size;
  };

  @action
  toggleTopping = ({ name, price }) => {
    if (this.selectedToppings.hasOwnProperty(name)) {
      delete this.selectedToppings[name];

      return;
    }

    this.selectedToppings[name] = price;
  };

  @action
  clean = () => {
    this.selectedPizza = undefined;
    this.selectedToppings = {};
  };
}

export default new OrderStore();
