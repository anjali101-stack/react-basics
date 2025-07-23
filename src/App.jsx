import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/RoutingComponets/Home'
import User from './Component/RoutingComponets/User'
import Login from './Component/RoutingComponets/Login'

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
