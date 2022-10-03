import React from 'react';
// import logo from './logo.svg';

import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { PostPage } from './pages/PostPage/PostPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Platform } from './pages/Platform/Platform';
import { RequireAuth } from './components/requireAuth/RequireAuth';
import { useSelector } from 'react-redux';
import { AboutPage } from './pages/AboutPage/AboutPage';

function App() {
  const isAuth = useSelector((state: any) => state.user.isAuth && state.user.user.email_verified);
  
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="/" element={<Navigate to="login" replace />}></Route>
      <Route path="/*" element={
      <RequireAuth isAuth={isAuth}>
        <Platform />
      </RequireAuth>
    }>
        <Route path="home" element={<PostPage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        {/* <Route path="cat-breeds" element={<CatBreeds />}></Route> */}
        {/* <Route path="cat-breeds/:id" element={<CatBreedsDetails />}></Route> */}
        {/* <Route path="about" element={<About />}></Route> */}
        <Route path="*" element={<div>Not found</div>}></Route>
      </Route>
    </Routes>
    
  );
}

export default App;
