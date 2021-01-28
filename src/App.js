import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import MainLayout from './Layout/MainLayout';
import configureStore from './configureStoreWithInjectSaga';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App;
