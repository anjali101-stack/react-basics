import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Form from './Component/Form/Form'
import Product from './Component/API/Product'
import DebouncedSearch from './Component/Debounce/DebouncedSearch '
import FormTableApp from './Component/Form/FormTableApp'
import ThrottleInput from './Component/Throttling/ThrottleInput'


const App = () => {
  return (
    <>
    <ThrottleInput/>
    {/* <DebouncedSearch/> */}
    {/* <Product/> */}
    {/* <Form/> */}
    {/* <FormTableApp/> */}
   
    </>
    // <Router>
    //    {/* <AppRoutes/> */}
       
    // </Router>
  )
}

export default App
