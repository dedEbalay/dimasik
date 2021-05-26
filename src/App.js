import React from 'react';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import BeerMenu from './components/BeerMenu/BeerMenu';
import SidebarCart from './components/SidebarCart/SidebarCart';
import EndCart from './components/EndCart/EndCart';
import Error404 from './components/Error/Error404';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={BeerMenu} />
          <Route path="/cart" component={EndCart} />
          <Route path="*" component={Error404} />
      </Switch>
      <SidebarCart />
      <Footer />
    </>
  )
}

export default App;