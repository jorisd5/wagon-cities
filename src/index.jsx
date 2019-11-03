// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import citiesReducer from './reducers/cities';
import citySelectedReducer from './reducers/city_selected';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const rootReducer = combineReducers({
  cities: citiesReducer,
  activeCity: citySelectedReducer
});

export default rootReducer;

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
