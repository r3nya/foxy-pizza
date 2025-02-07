import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'mobx-react';
import stores from './stores';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const apolloClient = new ApolloClient({
  uri: 'https://core-graphql.dev.waldo.photos/pizza',
});

ReactDOM.render(
  <Provider {...stores}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
