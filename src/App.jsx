import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Form from './Component/Form/Form'
import Product from './Component/API/Product'
import DebouncedSearch from './Component/Debounce/DebouncedSearch '
import FormTableApp from './Component/Form/FormTableApp'


const App = () => {
  return (
    <>
    {/* <DebouncedSearch/> */}
    {/* <Product/> */}
    {/* <Form/> */}
    <FormTableApp/>
   
    </>
    // <Router>
    //    {/* <AppRoutes/> */}
       
    // </Router>
  )
}

export default App
