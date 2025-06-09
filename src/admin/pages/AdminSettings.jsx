import React, { useEffect, useState } from 'react'

import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
// import { updateProfileApi } from '../../services/allApi';
// import { serverurl } from '../../services/serverUrl';
// import { adminProfileUpdateStatusContext } from '../../Context/Contextshare';

function AdminSettings() {


  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-200 flex flex-col items-center p-5'>
          <AdminSidebar />
        </div>
        <div>
          <div className="min-h-screen flex flex-col items-center justify-start p-4">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            <div className="flex flex-col md:flex-row md:items-start items-center gap-8 w-full max-w-6xl">

              {/* Left Text Section */}
              <div className="w-full md:w-1/2 text-gray-700 space-y-4 p-4">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatem quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?
                </p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatem quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis, consequatur quos eveniet inventore ipsam beatae iure fugiat eligendi quae laborum incidunt eum quis, est blanditiis exercitationem velit excepturi?
                </p>
              </div>

              {/* Right Form Section */}
              <div className="w-full md:w-1/2 bg-blue-100 p-6 rounded-lg">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <label htmlFor="profilefile" className="relative cursor-pointer">
                      <input type="file" id="profilefile" style={{ display: "none" }}
                        />

                       <img

                        src= "https://cdn-icons-png.freepik.com/512/8742/8742495.png"
                        alt="no image"
                        className="h-40 w-40 rounded-full object-cover bg-gray-300"

                       />
                      {/* :

                       <img */}

                      {/* //     // src=`${serverurl}/uploads/${existingProfileImage}`
                      //     alt="no image"
                      //     className="h-40 w-40 rounded-full object-cover bg-gray-300"

                      //   /> */}

                      

                      <div className="absolute bottom-2 right-2 bg-yellow-300 text-white p-2 rounded-full">
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </label>
                  </div>
                </div>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"

                  
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"

                   
                   

                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    
                    
                  />
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      type="reset"
                      className="flex-1 bg-yellow-400 hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400 text-white font-bold py-2 rounded"
                      
                    >
                      Reset
                    </button>
                    <button
                      type="button"

                      className="flex-1 bg-green-600 hover:bg-white hover:text-green-600 hover:border hover:border-green-600 text-white font-bold py-2 rounded"

                      
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>

      <ToastContainer position='top-center' theme='colored' autoClose="2000" />

    </>
  )
}

export default AdminSettings