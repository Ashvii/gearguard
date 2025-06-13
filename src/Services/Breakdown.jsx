import React, { useState } from 'react'
import Header from '../User/Components/Header'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { complaintApi } from '../Api Services/AllApi';


function Breakdown() {

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
                <h1 className='m-10 text-center pt-10 text-3xl'>Battery Jump Start</h1>
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


            <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Battery Jumpstart Service</h1>

                {/* Section: What is a Battery Jumpstart Service */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">What is a Battery Jumpstart Service?</h2>
                    <p>
                        A battery jumpstart service is a roadside assistance offering designed to start your vehicle when the battery is dead.
                        This service involves using an external power source to provide the necessary energy to start your car.
                        It’s a quick and effective solution to get your vehicle running without having to replace the battery immediately.
                    </p>
                </section>

                {/* Section: Common Reasons */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Common Reasons for a Dead Battery</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Leaving lights or accessories on:</strong> Drains the battery over time.</li>
                        <li><strong>Extreme temperatures:</strong> Affects battery performance in both heat and cold.</li>
                        <li><strong>Old battery:</strong> Batteries typically last 3–5 years and can fail unexpectedly.</li>
                        <li><strong>Corroded or loose connections:</strong> Prevent proper charging of the battery.</li>
                    </ul>
                </section>

                {/* Section: How It Works */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">How a Jump Start Service Works</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Assessment:</strong> Technician checks the battery and other possible issues.</li>
                        <li><strong>Preparation:</strong> Safety precautions are taken.</li>
                        <li><strong>Connection:</strong> Equipment is connected to the battery.</li>
                        <li><strong>Start the Engine:</strong> Vehicle starts and equipment is removed after confirming everything is working.</li>
                    </ol>
                </section>

                {/* Section: Benefits */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Benefits of a Professional Jump Start Service</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Safety:</strong> Performed by trained technicians.</li>
                        <li><strong>Convenience:</strong> Available 24/7 roadside assistance.</li>
                        <li><strong>Expertise:</strong> Diagnosis and car battery repair services offered.</li>
                        <li><strong>Peace of Mind:</strong> Reduces stress and ensures quick help.</li>
                    </ul>
                </section>

                {/* Section: Prevention */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Preventing Future Battery Issues</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Check and clean battery terminals regularly.</li>
                        <li>Turn off all electrical components when not in use.</li>
                        <li>Schedule periodic battery tests.</li>
                    </ul>
                </section>

                {/* Section: Battery Replacement */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">When to Consider a Battery Replacement</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Slow engine crank</strong>: Takes longer to start.</li>
                        <li><strong>Dim lights</strong>: Lights are not as bright as usual.</li>
                        <li><strong>Battery warning light</strong>: Illuminated on the dashboard.</li>
                    </ul>
                </section>

                {/* Section: Conclusion */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                    <p>
                        A battery jumpstart service is crucial in case of a dead battery. Understanding the service and maintaining your battery helps ensure safety and convenience on the road. Keep roadside assistance contact info handy!
                    </p>
                </section>
            </div>

            <ToastContainer theme="colored" position="top-center" autoClose={2000} />

        </div>
    )
}

export default Breakdown
