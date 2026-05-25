import React from 'react';
import Navbar from './ components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './ components/footer';

const App = () => {
  return (
    <div data-theme="dark" className="min-h-screen flex flex-col bg-base-200">
      <Navbar title={'tinderDev'} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
