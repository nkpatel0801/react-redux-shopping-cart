

import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../src/store';
import Products from './containers/Products';
import Cart from './containers/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path="/" exact component={Products}/>
      <Switch>
      <Route path="/cart" component={Cart}/>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
