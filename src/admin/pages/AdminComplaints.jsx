import React, { useEffect, useState } from 'react'

import AdminHeader from '../components/AdminHeader'



import { getAllComplaintsAdminApi, getAllUsersAdminApi } from '../../Api Services/AllApi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminComplaints() {
  const [complaintstatus, setcomplaintstatus] = useState(true)
  const [usersstatus, setusersstatus] = useState(false)

  const [complaintDetails, setComplaintDetails] = useState([])
  const [token, setToken] = useState("")



  const [allusers, setAllusers] = useState([])

  // const [filter, setFilter] = useState(false)






  const getAllComplaintAdmin = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    console.log("Request headers:", reqHeader)

    const result = await getAllComplaintsAdminApi(reqHeader);
    console.log("API result:", result)

    if (result.status === 200) {
      setComplaintDetails(result.data)
    } else {
      toast.error("Failed to fetch complaints")
    }
  }

  const getAllUsersAdmin = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    console.log("Request headers:", reqHeader)

    const result = await getAllUsersAdminApi(reqHeader);
    console.log("API result:", result)

    if (result.status === 200) {
      setAllusers(result.data)
    } else {
      toast.error("Failed to fetch complaints")
    }
  }



  useEffect(() => {
    const token = sessionStorage.getItem("token")
    console.log("Fetched token from sessionStorage:", token)

    if (token) {
      getAllComplaintAdmin(token)
      getAllUsersAdmin(token);
    } else {
      toast.error("Unauthorized: No token found")
    }
  }, [])



  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-1'>

        <div>
          <h1 className='text-3xl font-bold text-center my-5'>All Complaints</h1>
{/* 
          <button
            className="filter border rounded bg-red-800 flex justify-center items-center px-3 py-3 mx-10 text-white"
            onClick={() => setFilter(prev => !prev)}// toggle dropdown
          >
            Filter
          </button>

          {filter && (
            <div className="dropdown mx-10 mt-2 bg-white shadow-md rounded w-40">
              <p className='rounded bg-red-800 text-white px-3 py-2 cursor-pointer hover:bg-red-700 my-2'>Breakdown</p>
              <p className='rounded bg-red-800 text-white px-3 py-2 cursor-pointer hover:bg-red-700 my-2'>Repair</p>
              <p className='rounded bg-red-800 text-white px-3 py-2 cursor-pointer hover:bg-red-700 my-2'>Battery</p>
            </div>
          )} */}



          {/* tab */}
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setcomplaintstatus(true), setusersstatus(false) }} className={complaintstatus ? 'p-4 text-blue-600 rounded border-t border-r border-gray-200 cursor-pointer' : 'p-4 text-black rounded border-t border-r border-gray-200 cursor-pointer'}>Complaint List</p>
            <p onClick={() => { setcomplaintstatus(false); setusersstatus(true) }} className={usersstatus ? 'p-4 text-blue-600 rounded border-b border-l border-gray-200 cursor-pointer' : 'p-4 text-black rounded border-b border-l border-gray-200 cursor-pointer'}>Users</p>
          </div>



          {complaintstatus && (
            <div className="md:grid grid-cols-4 gap-5 md:mx-20 mx-5 mb-5">
              {complaintDetails.length > 0 ? (
                complaintDetails.map((item, index) => (
                  <div key={index} className="p-3 m-5 md:m-0 shadow-lg bg-white rounded-lg">
                    <div className="p-3 shadow-md">
                      <div className="flex flex-col items-start space-y-1">
                        <p className="text-sm text-gray-600">Name: {item.fname} {item.lname}</p>
                        <p className="text-sm text-gray-600">Phone: {item.phone}</p>
                        <p className="text-sm text-gray-600">Email: {item.email}</p>
                        <p className="text-sm text-blue-600">Message: {item.message}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-4">No Complaints Found</p>
              )}
            </div>
          )}


          {usersstatus && (
            <div className='md:grid grid-cols-3 gap-5 mx-10'>
              {allusers?.length > 0 ? (
                allusers.map((user) => (
                  <div key={user._id} className='bg-gray-300 rounded p-3 mb-5'>
                    <p className='text-red-600 mb-2'>ID: {user._id}</p>
                    <div className='flex gap-5'>

                      <div className='ms-3'>
                        <h3 className='text-blue-600 text-xl'>{user.username || "Unknown User"}</h3>
                        <p>{user.email}</p>
                        <p className='text-sm text-gray-700'>Role: {user.role || "User"}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-3">No users found</p>
              )}
            </div>
          )}


        </div>


      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />

    </>
  )
}

export default AdminComplaints