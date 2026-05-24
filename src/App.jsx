import React from 'react';
import Navbar from './ components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './ components/footer';

const App = () => {
  return (
    <div data-theme="light">
      <Navbar title={'tinderDev'} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
