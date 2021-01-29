import React from 'react';
import './styles.css';
import Photos from '../Conteiners/Photos';
import Users from '../Conteiners/Users';

const MainLayout = () => (
  <div className="MainLayout">
    <Users />
    <Photos />
  </div>
);

export default MainLayout;
