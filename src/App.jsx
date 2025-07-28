import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Form from './Component/Form/Form'
import Product from './Component/API/Product'
import DebouncedSearch from './Component/Debounce/DebouncedSearch '
import Throttlling from './Component/Throttlling/Throttlling'


const App = () => {
  return (
    <>
    {/* <Throttlling/> */}
    <DebouncedSearch/>
    {/* <Product/> */}
   
    </>
    // <Router>
    //    {/* <AppRoutes/> */}
       
    // </Router>
  )
}

export default App
