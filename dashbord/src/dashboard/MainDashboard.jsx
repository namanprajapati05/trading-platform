import React, { useState } from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Holding from './Holding'
import Position from './Position'
import Order from './Order'
import Fund from './Fund'
import UnderDevelopment from '../../../frontend/src/UnderDevelopment'
import NotFound from '../Pages/NotFound'


const MainDashboard = () => {
  
   
  return (
    <div>
        <div className="desktop_navbar">
         <Nav/>
        </div>
         <Routes>  
          <Route path='/' element={<Dashboard/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/holdings'  element={<UnderDevelopment/>} />
          <Route path="/positions" element={<UnderDevelopment />} />
          <Route path='/orders' element={<Order/>}/>
          <Route path='/funds' element={<UnderDevelopment/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes> 
    </div>
  )
}

export default MainDashboard
