import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
