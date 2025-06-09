
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/User/pages/Home'
import Profile from '../src/User/pages/Profile'
import AboutUs from '../src/User/pages/AboutUs'
import OurServices from '../src/User/pages/OurServices'
import Breakdown from '../src/Services/Breakdown'
import Repair from '../src/Services/Repair'
import FlatTyre from '../src/Services/FlatTyre'
import Auth from '../src/User/pages/Auth'
import AdminHome from  '../src/admin/pages/AdminHome'
import AdminCareers from  '../src/admin/pages/AdminCareers'

import AdminSettings from  '../src/admin/pages/AdminSettings'
import AdminComplaints from  '../src/admin/pages/AdminComplaints'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Aboutus' element={<AboutUs />} />
        <Route path='/OurServices' element={<OurServices />} />
        <Route path='/Breakdown' element={<Breakdown />} />
        <Route path='/Repair' element={<Repair />} />

        <Route path='/FlatTyre' element={<FlatTyre/>} />

        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register />} />

        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-complaints' element={<AdminComplaints />} />
        <Route path='/admin-careers' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />




      </Routes>

    </>
  )
}

export default App
