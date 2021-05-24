import React from 'react';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import BeerMenu from './components/BeerMenu/BeerMenu';
import SidebarCart from './components/SidebarCart/SidebarCart';
import EndCart from './components/EndCart/EndCart';

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={BeerMenu} />
          <Route path="/cart" component={EndCart} />
      </Switch>
      <SidebarCart />
    </>
  )
}

export default App;