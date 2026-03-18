import React from 'react';
import ChatBot from './components/ChatBot';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';
import { sileo, Toaster } from "sileo";

function App() {
  return (
    <div className="App">
      <Hero />
      <Toaster position="top-center" />
      {/* <Experience />
      <Footer /> */}
      <ChatBot />
    </div>
  );
}

export default App;