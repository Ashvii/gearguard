import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import EditProfile from '../Components/EditProfile'

function Profile() {
  const [regComplaint, setregComplaint] = useState(true)
  const [complaintStatus, setcomplaintStatus] = useState(false)


  return (
    <div className=''>
      <div
        className="bg-black w-full"
        style={{ height: "200px" }}
      ></div>

      <div
        style={{
          borderRadius: "50%",
          marginLeft: "70px",
          marginTop: "-130px",
          width: "230px",
          height: "230px",
        }}
        className="p-3 bg-white"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>

      <div className="md:flex justify-between px-20 mt-5  ">
        <p className="flex justify-center items-center ">
          <span className="md:text-3xl text-2xl">Ashwin</span>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-blue-700 ms-3 mt-2"
          />
        </p>
        <EditProfile />
      </div>

      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi at aliquid recusandae veniam quas tempore quae in velit quia perferendis aliquam cupiditate optio blanditiis delectus, quis quisquam praesentium doloremque?
      </p>

      <div className="md:px-40">
        {/* tab */}
        <div className="flex justify-center items-center my-5">
          <p
            onClick={() => {
              setregComplaint(true)
              setcomplaintStatus(false)
            }}
            className={regComplaint ? 'text-blue-600 p-4 border-l border-t border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}
          >
            REGISTER COMPLAINT
          </p>
          <p
            onClick={() => {
              setregComplaint(false)
              setcomplaintStatus(true)

            }}
            className={complaintStatus ? 'text-blue-600 p-4 border-l border-t border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}
          >
            COMPLAINT STATUS
          </p>

        </div>

        {/* Tab content */}
        {regComplaint && <div className="text-center text-gray-600">

          <h1 className=" text-center text-3xl  font-medium">Complaint Details</h1>

          <div className="md:grid grid-cols-1 mt-5 w-full">
            <div className="px-3 items-center justify-center text-center">

              <div className="mb-3">
                <input type="text" placeholder="First Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Last Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Email" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />

              </div>
              <div className="mb-3">
                <input type="tel" placeholder="Phone Number" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />

              </div>
              <div className="mb-3">
                <input type="text" placeholder='Message' className='w-full p-2 rounded bg-red-200 ocus:outline-none focus:ring-2 focus:ring-red-600 h-20 ' />

              </div>
              <div className="mb-3">
                <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Submit</button>

              </div>


            </div>
          </div>
        </div>}


        {complaintStatus && <div className="text-center text-gray-600">
          
          <div className="bg-gray-200 p-4 rounded  mb-3">
                <div className="md:grid grid-cols-1 ">
                  <div className="px-4">

                    <h1 className="text-2xl">complaint</h1>
                    <h2>register by</h2>
                    <h3 className="text-blue-600">fee</h3>
                    <p> message-Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id earum, sed nobis ipsum veniam neque consequuntur libero maxime autem omnis voluptatibus quos a enim, corrupti nam dolor error iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aspernatur nostrum velit reiciendis ullam nulla perspiciatis adipisci perferendis fugit dolor aperiam reprehenderit doloremque amet maiores, cum sit cupiditate minus modi.</p>

                    <div className="flex mt-3">
                      <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="no img" style={{ height: '70px', widows: '70px' }} />

                      <img src="https://www.pngplay.com/wp-content/uploads/5/Approved-Background-PNG-Image.png" alt="no img" style={{ height: '70px', widows: '70px' }} />

                    </div>

                  </div>
                  <div className="px-4">
                    <button className="p-2 bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700  rounded mt-5">Delete</button>
                  </div>
                </div>

              </div>
          
          </div>}

      </div>


    </div>
  )
}

export default Profile
