import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import MailboxPage from './pages/MailboxPage';
import RegistrationPage from './pages/RegistrationPage';
import DPAlter1 from './pages/DPAlter1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/db2" element={<DPAlter1 />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
