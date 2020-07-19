import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Profile/>
      <Footer/>
      
    </div>
  );
}

export default App;
