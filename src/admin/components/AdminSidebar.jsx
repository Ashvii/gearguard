import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { adminProfileUpdateStatusContext } from '../../Context/Contextshare'


function AdminSidebar() {
  const [HomeStatus, setHomeStatus] = useState(false)
  const [BookStatus, setBookStatus] = useState(false)
  const [CareerStatus, setCareerStatus] = useState(false)
  const [SettingStatus, setSettingStatus] = useState(false)
  const navigate = useNavigate()


  return (
    <>
      <div className='flex justify-center items-center flex-col'>


        {/* <img src={adminD.profile==""?"https://cdn-icons-png.freepik.com/512/8742/8742495.png":`${serverurl}/uploads/${adminD.profile}`}   alt="" style={{ width: "150px", height: "150px" }} /> */}


        <h3 className='mt-5'>username</h3>
      </div>
      <div className='my-5'>
        <div className='mb-3'>
          <input type="radio" id='home' name='filter' checked={HomeStatus} onChange={() => filter('home')} />
          <label htmlFor="home" onClick={() => filter('home')} className='ms-3'>
            <FontAwesomeIcon icon={faHome} className="me-3" />
            Home
          </label>
        </div>

        <div className='mb-3'>
          <input type="radio" id='allbooks' name='filter' checked={BookStatus} onChange={() => filter('books')} />
          <label htmlFor="allbooks" onClick={() => filter('books')} className='ms-3'>
            <FontAwesomeIcon icon={faBook} className="me-3" />
            All Books
          </label>
        </div>

        <div className='mb-3'>
          <input type="radio" id='careers' name='filter' checked={CareerStatus} onChange={() => filter('careers')} />
          <label htmlFor="careers" onClick={() => filter('careers')} className='ms-3'>
            <FontAwesomeIcon icon={faBagShopping} className="me-3" />
            Careers
          </label>
        </div>

        <div className='mb-3'>
          <input type="radio" id='settings' name='filter' checked={SettingStatus} onChange={() => filter('settings')} />
          <label htmlFor="settings" onClick={() => filter('settings')} className='ms-3'>
            <FontAwesomeIcon icon={faGear} className="me-3" />
            Settings
          </label>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
