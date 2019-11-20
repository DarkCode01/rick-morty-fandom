import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Apollo config
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// styles css
import './index.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
