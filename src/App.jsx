import './App.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import Character from './components/Character'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Home/>
      <Character/>
      </BrowserRouter>
    
     
     
   
    </>
  )
}

export default App
