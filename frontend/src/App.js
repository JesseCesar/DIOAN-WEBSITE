import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Compliance from './pages/Compliance';
import News from './pages/News';
import CreateNews from './pages/CreateNews';
import DeleteNews from './pages/DeleteNews';
import EditNews from './pages/EditNews';
import NewsView from './pages/NewsView';
import OurPrinciples from './pages/OurPrinciples';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <Router>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/our-principles" element={<OurPrinciples />} />
        <Route path="/news" element={<News />} />
        <Route path='/news/create' element={<CreateNews />} />
        <Route path="/news/:id" element={<NewsView />} />
        <Route path='/news/edit/:id' element={<EditNews />} />
        <Route path='/news/delete/:id' element={<DeleteNews />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/sign-Up' element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
