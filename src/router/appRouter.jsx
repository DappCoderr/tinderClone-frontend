import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import Register from '../pages/register.page';
import HomePage from '../pages/home.page';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
