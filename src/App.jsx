import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import User from './Component/User'
import Login from './Component/Login'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/user' Component={User}/>
         <Route path='/login' Component={Login}/>
      </Routes>
      
    </Router>
  )
}

export default App
