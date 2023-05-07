import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Admin/Dashboard'
import UserSign from '../Pages/SignLogin/UserSign'
import UserLogin from '../Pages/SignLogin/UserLogin'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'
import Cartpage from '../Pages/Cartpage/Cartpage'

const AllRoutes = () => {


return (
    <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       <Route path="/usersign" element={<UserSign/>}></Route>
       <Route path="/userlogin" element={<UserLogin/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
       <Route path="/cartpage" element={<Cartpage/>}></Route>
       <Route path="/admin" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default AllRoutes
