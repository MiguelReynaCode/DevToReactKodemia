import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import User from './pages/User';
import LoginForm from './components/LoginForm'; 
import CreateAccount from './components/CreateAcount'; 
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import RightSideBar from './components/RightSideBar';
import Footer from './components/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
       
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-account" element={<CreateAccount />} />

       
        <Route path="/article/:id" element={<Article />} />

       
        <Route path="/" element={
          <>
            <Nav />
            <div className="flex flex-grow bg-gray-200">
              <SideBar />
              <main className="flex-1">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="user/:username" element={<User />} />
                 
                </Routes>
              </main>
              <RightSideBar />
            </div>
            <Footer/>
          </>
        } />
      </Routes>
    </Router>
  </React.StrictMode>
);
