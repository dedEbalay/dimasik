import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import BeerMenu from './components/BeerMenu/BeerMenu';
import SidebarCart from './components/SidebarCart/SidebarCart';
import EndCart from './components/EndCart/EndCart';
import Error404 from './components/Error/Error404';
import Footer from './components/Footer/Footer';
import MenuListItem from './components/MenuListItem/MenuListItem';
import { connect } from 'react-redux';
import { beerListLoaded } from './redux/actions/actions';
import BeerListWrapper from './components/BeerListWrapper/BeerListWrapper'


function App(props) {

  const { beerList, beerListLoaded } = props;

  useEffect(() => {
    beerList.getBeer()
        .then(res =>beerListLoaded(res));
  }, [beerListLoaded, beerList]);

  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={BeerMenu} />
          <Route path="/cart" component={EndCart} />
          <Route exact path="/menu/item/:id" component={MenuListItem} />
          <Route path="*" component={Error404} />
      </Switch>
      <SidebarCart />
      <Footer />
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    menu: store.menu
  }
}

const mapDispatchToProps = {
  beerListLoaded
}

export default BeerListWrapper()(connect(mapStateToProps, mapDispatchToProps)(App));