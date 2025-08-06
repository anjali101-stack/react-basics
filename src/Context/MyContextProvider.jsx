import React, { useState } from 'react'
import { MyContext } from './MyContext'

const MyContextProvider = ({children}) => {
  const [count , setCount ] = useState(10)
    const value = "hei this data is passed form context api"
  return (
    <MyContext.Provider value={{value ,count , setCount}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
