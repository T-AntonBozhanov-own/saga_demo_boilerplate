import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
// import configureStore from './configureStore';
import configureStore from './configureStoreWithInjectSaga';
import MainLayout from './Layout/mainLayout';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App;
