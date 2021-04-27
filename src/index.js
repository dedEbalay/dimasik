import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import {Provider} from 'react-redux';
import ErrorBoundry from './components/ErrorBoundry';
import BeerList from './services/BeerList';
import {BrowserRouter as Router} from 'react-router-dom';
import BeerListContext from './components/BeerListContext/BeerListContext';

const beerList = new BeerList();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BeerListContext.Provider value={beerList}>
        <Router>
          <App /> 
        </Router>
      </BeerListContext.Provider>
    </ErrorBoundry>
  </Provider>
  ,document.getElementById('root')
);
