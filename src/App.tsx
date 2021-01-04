import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Product } from './components/pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route path="/product" component={Product}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
