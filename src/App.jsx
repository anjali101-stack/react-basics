import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Form from './Component/Form/Form'
import Product from './Component/API/Product'
import DebouncedSearch from './Component/Debounce/DebouncedSearch '


const App = () => {
  return (
    <>
    <DebouncedSearch/>
    {/* <Product/> */}
   
    </>
    // <Router>
    //    {/* <AppRoutes/> */}
       
    // </Router>
  )
}

export default App
