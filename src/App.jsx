import './App.css'
import { useRef } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Character from './components/Character'
import React from 'react'

function App() {
 
  const homeRef = useRef(null);
  const characterRef = useRef(null);


  return (
    <>
      <Header/>
      <section ref={homeRef}>
        <Home />
      </section>
     <section ref={characterRef}>
        <Character />
      </section>
     <Footer homeRef={homeRef} characterRef={characterRef} />
      
    
     
     
   
    </>
  )
}

export default App
