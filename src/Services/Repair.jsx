import React, { useState } from 'react'
import Header from '../User/Components/Header'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { complaintApi } from '../Api Services/AllApi';



function Repair() {

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
                <h1 className='m-10 text-center pt-10 text-3xl'>Minor Repair</h1>
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

            <div className="bg-gray-100 px-6 py-12 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-4">Emergency Car Repair Service</h2>
          <p className="text-lg">
            When your car breaks down unexpectedly, getting it repaired quickly is essential, no matter where you are.
            Instant car repair services provide a fast and reliable solution, ensuring you get back on the road without
            delay. Whether you’re dealing with a flat tire, engine trouble, or brake failure, these services are designed
            to address a wide range of issues efficiently. With the convenience of mobile repair, skilled mechanics come
            directly to your location—whether on the roadside, at home, or at work. This car repair anywhere service saves
            you the hassle of finding a workshop and minimizes downtime, offering peace of mind when you need it most.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Comprehensive On-the-Spot Repairs</h3>
          <p className="text-lg">
            Instant car repair services offer a variety of{" "}
            <span className="font-bold text-yellow-600">on-the-spot repairs</span> to keep your vehicle moving. Common
            repairs include fixing flat tires, jumpstarting dead batteries, replacing faulty spark plugs, and resolving
            minor engine issues. If your car won’t start or if you’ve experienced a sudden breakdown, these services ensure
            that a nearby mechanic can quickly diagnose and fix the problem. Whether you’re stuck on the highway or in your
            driveway, these repairs are performed on-site, getting you back on the road safely and swiftly.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Easy Online Booking for Repairs</h3>
          <p className="text-lg">
            In today’s digital age, booking a repair service should be effortless. AutoAid’s online car repair services
            make it simple to schedule appointments, track service progress, and receive quotes directly from their
            website. This streamlined process saves time and eliminates the hassle, ensuring that you can get the necessary
            repairs done quickly and efficiently.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Access to Nearby Mechanics</h3>
          <p className="text-lg">
            When your car needs immediate attention, having access to a nearby mechanic is essential. AutoAid connects you
            with a network of skilled mechanics, allowing you to find help quickly, no matter where you are. This ensures
            that you’re never far from professional assistance, helping you get back on the road without unnecessary delays.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Why Choose AutoAid for Instant Car Repair?</h3>
          <p className="text-lg mb-4">
            Opting for AutoAid’s instant car repair services offers several advantages. With quick response times, the
            convenience of online booking, and high-quality repairs, AutoAid keeps your vehicle running smoothly. Whether
            you need emergency repairs or routine fixes, AutoAid’s services are designed to meet your needs efficiently and
            effectively.
          </p>
          <p className="text-lg">
            AutoAid’s instant car repair services are an invaluable resource for those who prioritize convenience and
            reliability. By offering a platform where you can easily choose a mechanic, find nearby help, and manage the
            repair process online, AutoAid ensures your car stays in excellent condition, no matter the situation.
          </p>
        </section>
      </div>
    </div>
        </div>
    )
}

export default Repair
