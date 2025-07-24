import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Component/RoutingComponets/Home'
import User from './Component/RoutingComponets/User'
import Login from './Component/RoutingComponets/Login'
import FormTableApp from './Component/Form/FormTableApp'
import Form from './Component/Form/Form'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/user' Component={User}/>
        <Route path='/login' Component={Login}/>     
        <Route path='/form' Component={Form}/>
    </Routes>
  )
}

export default AppRoutes
