import React, { useEffect, useState } from 'react'

import AdminHeader from '../components/AdminHeader'
import { ToastContainer } from "react-toastify";

import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { toast } from 'react-toastify';
import { addJobApi, deleteJobApi, getAllApplicationApi, getAllJobApi } from '../../Api Services/AllApi';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../Api Services/serverUrl';

function AdminCareers() {

  const [jobpostStatus, setjobpostStatus] = useState(true)

  const [viewapplicationStatus, setviewapplicationStatus] = useState(false)

  const [allApplication, setAllApplication] = useState([])

  const [modalStatus, setModalStatus] = useState(false)




  const [addStatus, setAddStatus] = useState({})

  const [JobDetails, setJobDetails] = useState({
    title: "", location: "", jtype: "", salary: "", qualification: "", experience: "", description: ""
  })

  const [Alljobs, setAllJobs] = useState([])

  const [Searchkey, setSearchKey] = useState("")

  const [deletejobStatus, setDeletejobStatus] = useState({})

  console.log(JobDetails);


  const handleSubmit = async () => {
    const { title, location, jtype, salary, qualification, experience, description } = JobDetails;

    if (!title || !location || !jtype || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely");
      return;
    }

    const reqBody = { title, location, jtype, salary, qualification, experience, description };

    try {
      const result = await addJobApi(reqBody);
      console.log("🟢 API Response:", result);

      if (result.status === 401) {
        toast.warning(result.data?.message || "Unauthorized");
      } else if (result.status === 200 || result.status === 201) {
        toast.success("Job added successfully");
        handleReset();
        setAddStatus(result.data);
      } else {
        toast.error(result.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error("🔴 API Error:", error);
      toast.error("Request failed. Check console for details.");
    }
  };

  const handleReset = () => {

    setJobDetails({ title: "", location: "", jtype: "", salary: "", qualification: "", experience: "", description: "" })

  }

  const getAllJObs = async (Searchkey) => {

    const result = await getAllJobApi(Searchkey)
    console.log(result);

    if (result.status == 200) {
      setAllJobs(result.data)
    }

  }


  // delete job
  const deleteJob = async (id) => {

    const result = await deleteJobApi(id)
    console.log(result);

    if (result.status == 200) {
      setDeletejobStatus(result)
    }

  }

  //get all application
  const getAllApplication = async () => {
    const result = await getAllApplicationApi()

    if (result.status == 200) {
      setAllApplication(result.data)
    }

  }

  console.log(allApplication);


  useEffect(() => {


    if (jobpostStatus == true) {

      getAllJObs(Searchkey)

    }
    else if (viewapplicationStatus == true) {

      getAllApplication()

    }
    else {

      console.log("something went wrong");

    }


  }, [addStatus, Searchkey, deletejobStatus, viewapplicationStatus])




  return (
    <>
      

      <section className='banner py-10'>
        <AdminHeader />

        <h1 className='m-10 text-center pt-10 text-3xl'>Our Careers</h1>
      </section>

      <div className='md:grid grid-cols-1'>

        <div>
          {/* tab */}
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setjobpostStatus(true), setviewapplicationStatus(false) }} className={jobpostStatus ? 'p-4 text-black rounded border-t border-r border-gray-200 cursor-pointer' : 'p-4 text-blue-600 rounded border-t border-r border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setjobpostStatus(false), setviewapplicationStatus(true) }} className={viewapplicationStatus ? 'p-4 text-black rounded border-b border-l border-gray-200 cursor-pointer' : 'p-4 text-blue-600 rounded border-b border-l border-gray-200 cursor-pointer'}>View Application</p>
          </div>

          {jobpostStatus &&
            <div>
              <div className='flex justify-between md:px-10 py-5 p-5'>
                <div className='flex justify-center items-center my-5'>


                  <input placeholder='Job Title' className='border border-gray-400 px-5 py-2 md:w-96 w-40 placeholder-gray-400' type="text" value={Searchkey} onChange={(e) => setSearchKey(e.target.value)} />



                  <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800'
                  >Search</button>
                </div>
                <div>
                  <button className='border border-blue-900 bg-white text-blue-900 px-5 py-2 hover:bg-blue-900 hover:text-white my-5' onClick={() => setModalStatus(true)}>Add Job</button>
                </div>
              </div>
              <div className='md:px-10 py-5 p-5'>


                {
                  Alljobs?.length > 0 ? Alljobs.map((Job, index) => (
                    <div className='shadow border border-gray-500 mb-2' key={index}>
                      <div className="md:grid grid-cols-[8fr_1fr] p-5">
                        <div>
                          <h1 className='mb-3 text-3xl font-semibold'>{Job?.title}</h1>
                          <hr />
                          <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{Job?.location}</p>
                          <p className='mt-3'>{Job?.jtype}</p>
                          <p className='mt-3'>{Job?.salary}</p>
                          <p className='mt-3'>{Job?.qualification}</p>
                          <p className='mt-3'>{Job?.experience}</p>
                          <p className='text-justify'>{Job?.description}</p>
                        </div>

                      </div>
                      <div className='flex md:justify-center items-start justify-end'>
                        <button
                          onClick={() => deleteJob(Job?._id)}
                          className='bg-red-800 mt-5 md:mt-0 text-white p-3 rounded ms-3 hover:bg-white hover:border hover:border-red-800 hover:text-red-800 mb-3'
                        >
                          Delete <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    </div>
                  )) :
                    <p>NO JOBS</p>
                }
                <div className='flex md:justify-center items-start justify-end'>
                  <button
                    onClick={() => setModalStatus(true)}
                    className='border border-blue-900 bg-white text-blue-900 px-5 py-2 hover:bg-blue-900 hover:text-white my-5'
                  >
                    Add Job
                  </button>

                </div>

              </div>



            </div>

          }

          {modalStatus && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="fixed inset-0 bg-gray-500/75 transition-opacity"
                aria-hidden="true"
              ></div>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    {/* title */}
                    <div className="bg-gray-900 px-4 py-3 flex justify-between  sm:px-6">
                      <h1 className="text-white text-2xl ">Job Details</h1>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setModalStatus(false)}
                        className="text-white fa-2x"
                      />
                    </div>

                    {/* body */}
                    <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Job Title"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.title}
                          onChange={(e) => setJobDetails({ ...JobDetails, title: e.target.value })}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Location"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.location}
                          onChange={(e) => setJobDetails({ ...JobDetails, location: e.target.value })}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Job Type"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.jtype}
                          onChange={(e) => setJobDetails({ ...JobDetails, jtype: e.target.value })}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Salary"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.salary}
                          onChange={(e) => setJobDetails({ ...JobDetails, salary: e.target.value })}

                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Qualification"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.qualification}
                          onChange={(e) => setJobDetails({ ...JobDetails, qualification: e.target.value })}

                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Experience"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.experience}
                          onChange={(e) => setJobDetails({ ...JobDetails, experience: e.target.value })}

                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Description"
                          className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                          value={JobDetails.description}
                          onChange={(e) => setJobDetails({ ...JobDetails, description: e.target.value })}

                        />
                      </div>
                    </div>



                    {/* footer modal */}
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs   hover:bg-white hover:text-black hover:border hover:border-black  sm:ml-3 sm:w-auto"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-white hover:text-black hover:border hover:border-black sm:mt-0 sm:w-auto"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {viewapplicationStatus && (
            <div className='p-10 overflow-x-auto flex justify-center'>
              {
                allApplication?.length > 0 ? (
                  <table className='border border-gray-200 text-center'>
                    <thead>
                      <tr className='bg-red-700 text-white font-medium'>
                        <th className="py-2 px-4">Sl.No.</th>
                        <th className="py-2 px-4">Job Title</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Qualification</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Phone</th>
                        <th className="py-2 px-4">Cover Letter</th>
                        <th className="py-2 px-4">Resume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allApplication?.map((item, index) => (
                          <tr className='border border-gray-200' key={index}>
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{item?.jobtitle}</td>
                            <td className="py-2 px-4 border-b">{item?.fullname}</td>
                            <td className="py-2 px-4 border-b">{item?.qualification}</td>
                            <td className="py-2 px-4 border-b">{item?.email}</td>
                            <td className="py-2 px-4 border-b">{item?.phone}</td>
                            <td className="py-2 px-4 border-b">{item?.coverletter}</td>
                            <td className="py-2 px-4 border-b">
                              <a
                                href={`${serverUrl}/pdfUploads/${item?.resume}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                              >
                                Resume
                              </a>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                ) : (
                  <p className='text-center w-full'>NO Application</p>
                )
              }
            </div>
          )}

        </div>
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={2500} />

    </>
  )
}

export default AdminCareers