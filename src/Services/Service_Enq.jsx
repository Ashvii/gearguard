import React from 'react'

function Service_Enq() {
  return (
    <>
      <div className="flex justify-center items-center h-[400px]">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl border shadow-lg space-y-4">
          <input type="text" placeholder="First Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <input type="text" placeholder="Last Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <input type="text" placeholder='Message' className='w-full p-2 rounded bg-red-200 ocus:outline-none focus:ring-2 focus:ring-red-600 h-20 ' />
          <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Submit</button>
        </div>
      </div>


    </>
  )
}

export default Service_Enq
