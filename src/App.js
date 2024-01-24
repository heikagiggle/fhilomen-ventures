import React from 'react';
import { Brand, Background, Navbar} from './components';
import {About, Blog, ContactUs, Footer, Gallery, Header, Review} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Background/>
      <div className='gradient__bg'>
        <About/>
        <Brand/>
      </div>
      <Blog/>
      <Gallery/>
      <Review/>
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default App