import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const HandleNavigation = () => {
        navigate("/login")
    }
  return (
    <div>
      <h1>home</h1>
      <Link to="/user" state={{ name: "Anjali", age: 25 }}>User</Link>
      <button onClick={HandleNavigation}>Go to login page </button>
    </div>
  )
}

export default Home
