import React, { useState } from 'react'
import Header from '../User/Components/Header'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { complaintApi } from '../Api Services/AllApi';

function FlatTyre() {

     const [complaint, setComplaint] = useState({
      
              fname: "",
              lname: "",
              email: "",
              phone: "",
              message: "",
      
          })
      
          console.log(complaint);
      
          const handleSubmit = async () => {
      
              const { fname, lname, email, phone, message } = complaint
      
              if (!fname || !lname || !email || !phone || !message) {
                  toast.warning('please the details completely')
                  return;
              }
      
              try {
      
                  const result = await complaintApi({ fname, lname, email, phone, message })
                  console.log(result);
      
      
                  if (result.status == 200) {
      
                      setTimeout(() => {
                          toast.success('Complaint Registered successfully');
                      }, 100);
                      
                      setComplaint({
      
                          fname: "",
                          lname: "",
                          email: "",
                          phone: "",
                          message: ""
      
                      })
      
      
      
                  }
                  else if (result.status == 409) {
      
                      toast.warning('user not found')
                      setComplaint({
      
                          fname: "",
                          lname: "",
                          email: "",
                          phone: "",
                          message: ""
      
                      })
      
                  }
                  else {
      
                      toast.error('Something went wrong')
                      setComplaint({
      
                          fname: "",
                          lname: "",
                          email: "",
                          phone: "",
                          message: ""
      
                      })
                  }
      
              } catch (err) {
      
                  toast.error("Something went wrong");
      
              }
      
          }
    
    return (
        <div>

            <section className='banner py-10'>
                <Header />
                <h1 className='m-10 text-center pt-10 text-3xl'>Flat Tyre Repair</h1>
            </section>

            <div className="service my-10">
                 <div className="flex justify-center items-center h-[400px]">
                    <div className="w-full max-w-md bg-white p-6 rounded-2xl border shadow-lg space-y-4">
                        <input type="text" placeholder="First Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"

                            value={complaint.fname}

                            onChange={(e) =>
                                setComplaint({ ...complaint, fname: e.target.value })
                            }

                        />
                        <input type="text" placeholder="Last Name" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"

                            value={complaint.lname}

                            onChange={(e) =>
                                setComplaint({ ...complaint, lname: e.target.value })
                            }

                        />
                        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"

                            value={complaint.email}

                            onChange={(e) =>
                                setComplaint({ ...complaint, email: e.target.value })
                            }

                        />


                        <input type="tel" placeholder="Phone Number" className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"

                            value={complaint.phone}

                            onChange={(e) =>
                                setComplaint({ ...complaint, phone: e.target.value })
                            }


                        />
                        <input type="text" placeholder='Message' className='w-full p-2 rounded bg-red-200 ocus:outline-none focus:ring-2 focus:ring-red-600 h-20 '

                            value={complaint.message}

                            onChange={(e) =>
                                setComplaint({ ...complaint, message: e.target.value })
                            }

                        />

                        <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            onClick={handleSubmit}
                        >Submit</button>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default FlatTyre
