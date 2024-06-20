import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Compliance from './pages/Compliance';
import News from './pages/News';
import NewsView from './pages/NewsView';
import OurPrinciples from './pages/OurPrinciples';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <Router>
      <LanguageSwitcher />
      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/news" element={<News />} />
          <Route path="/our-principles" element={<OurPrinciples />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/sign-Up' element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/article/:id" component={NewsView} />
        </Routes>
      </Switch>
      <Toaster />
    </Router>
  );
};

export default App;
