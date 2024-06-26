import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Success from './pages/Success.jsx';
import './App.css'
import MenuPage from './pages/MenuPage.jsx';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/MenuPage' element={<MenuPage/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App