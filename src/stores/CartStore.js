import { action, observable } from 'mobx';

class CartStore {
  @observable
  items = [];

  @action
  addItem = payload => {
    this.items.push(payload);
  };

  @action
  removeItem = id => (this.items = this.items.filter((_, i) => id !== i));
}

export default new CartStore();
