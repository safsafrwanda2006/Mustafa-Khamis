import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Assistant from './sections/Assistant';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Footer from './sections/Footer';
import StartProject from './sections/StartProject';

function App() {
  return (
    <>
      <main >
        <Header />
        <Hero />
        <About />
        <Experience />
        <Assistant />
        <Projects />
        <StartProject/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;