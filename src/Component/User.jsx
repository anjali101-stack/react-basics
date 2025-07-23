import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    console.log(state)

    if(!state){
        navigate('/')
    }
  
    // const userParams = useLocation()
    // const {name , age} = userParams.state
  return (
    <div>
      <h1>user</h1>
       <h2>Name: {state.name}, Age: {state.age}</h2>
    </div>
  )
}

export default User
