import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Result from './pages/Result'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import { AppContext } from './context/AppContext'


function App() {
  const {showLogin} = useContext(AppContext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 mt-1.5'>
      <ToastContainer position='bottom-right'/>
      <NavBar/>
      {showLogin && <LogIn/>}
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/result' element={<Result/> }/>
        <Route path='/buy' element={<BuyCredits/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
