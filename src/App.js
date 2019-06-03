import React from 'react';
import { observer } from 'mobx-react';
import Header from './components/Header';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div className="main container">
      <Header />
      <OrderSummary />
    </div>
  );
};

export default observer(App);
