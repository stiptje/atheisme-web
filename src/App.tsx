
import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Committee from './components/Committee/Committee';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Committee />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
