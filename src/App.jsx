import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Form from './Component/Form/Form'
import Product from './Component/API/Product'
import DebouncedSearch from './Component/Debounce/DebouncedSearch '
import FormTableApp from './Component/Form/FormTableApp'
import MyContextProvider from './Context/MyContextProvider'


const App = () => {
  return (
    <MyContextProvider>
    
    {/* <DebouncedSearch/> */}
    {/* <Product/> */}
    <Form/>
    {/* <FormTableApp/> */}
   
    </MyContextProvider>
    // <Router>
    //    {/* <AppRoutes/> */}
       
    // </Router>
  )
}

export default App
