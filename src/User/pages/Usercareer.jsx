import React, { useState } from 'react'
import Header from '../Components/Header'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Usercareer() {

    const [jobpostStatus, setjobpostStatus] = useState(true)

    const [viewapplicationStatus, setviewapplicationStatus] = useState(false)

    const token = sessionStorage.getItem("token");


    return (
        <>
            <section className='banner py-10'>
                <Header />
                <h1 className='m-10 text-center pt-10 text-3xl'>Our Career</h1>
            </section>

            {!token ? (
                <div className="flex justify-center items-center h-screen">
                    <Link to="/login">
                        <img
                            src="https://cdn-icons-gif.flaticon.com/17905/17905768.gif"
                            alt="Login Required"
                            className="w-60 h-60"
                        />
                    </Link>
                </div>
            ) : (
                <>
                    {/* Tab Navigation */}
                    <div className='flex justify-center items-center my-5'>
                        <p
                            onClick={() => {
                                setjobpostStatus(true);
                                setviewapplicationStatus(false);
                            }}
                            className={`p-4 rounded border cursor-pointer ${jobpostStatus
                                    ? 'text-black border-t border-r border-gray-200'
                                    : 'text-blue-600 border-t border-r border-gray-200'
                                }`}
                        >
                            Job Post
                        </p>
                        <p
                            onClick={() => {
                                setjobpostStatus(false);
                                setviewapplicationStatus(true);
                            }}
                            className={`p-4 rounded border cursor-pointer ${viewapplicationStatus
                                    ? 'text-black border-b border-l border-gray-200'
                                    : 'text-blue-600 border-b border-l border-gray-200'
                                }`}
                        >
                            View Application
                        </p>
                    </div>

                    {/* Job Post Section */}
                    {jobpostStatus && (
                        <div className="md:px-10 py-5 p-5">
                            <div className="shadow border border-gray-500 mb-2">
                                <div className="md:grid grid-cols-[8fr_1fr] p-5">
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">title</h1>
                                        <hr />
                                        <p className="mt-3">
                                            <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 me-3" />
                                            location
                                        </p>
                                        <p className="mt-3">jtype</p>
                                        <p className="mt-3">salary</p>
                                        <p className="mt-3">qualification</p>
                                        <p className="mt-3">experience</p>
                                        <p className="text-justify">description</p>
                                    </div>
                                </div>
                                <div className="flex md:justify-center items-start justify-end">
                                    <button
                                        className="bg-red-800 mt-5 md:mt-0 text-white p-3 rounded ms-3 hover:bg-white hover:border hover:border-red-800 hover:text-red-800 mb-3"
                                        onClick={() => {
                                            setjobpostStatus(false);
                                            setviewapplicationStatus(true);
                                        }}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Application Form Section */}
                    {viewapplicationStatus && (
                        <div className="flex justify-center items-center h-[400px] m-4">
                            <div className="w-full max-w-md bg-white p-6 rounded-2xl border shadow-lg space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Position"
                                    className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Age"
                                    className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Qualification"
                                    className="w-full p-2 rounded bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                                />

                                {/* Resume Upload */}
                                <div className="w-full">
                                    <label
                                        htmlFor="resume"
                                        className="block w-full p-2 text-center rounded bg-red-100 text-gray-700 cursor-pointer hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                                    >
                                        Upload Resume
                                    </label>
                                    <input
                                        type="file"
                                        id="resume"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}


            <Footer/>





        </>
    )
}
