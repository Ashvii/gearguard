import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addApplicationApi, getAllJobApi } from "../../Api Services/AllApi";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";

function Careers() {

    const [modalstatus, setModalStatus] = useState(false);
    const [ApplicantDetails, setApplicantDetails] = useState({
        fullname: "",
        email: "",
        phone: "",
        qualification: "",
        coverletter: "",
        resume: "",
    });

    console.log(ApplicantDetails);


    const [alljobs, setAlljobs] = useState([]);

    const [searchkey, setSearchKey] = useState("")

    const [jobTitle, setjobTitle] = useState("")
    const [token, setToken] = useState("")


    const getAlljobs = async (searchkey) => {
        const result = await getAllJobApi(searchkey);
        console.log(result);
        if (result.status === 200) {
            setAlljobs(result.data);
        }
    };

    const handleReset = () => {
        setApplicantDetails({
            fullname: "",
            email: "",
            phone: "",
            qualification: "",
            coverletter: "",
            resume: "",
        });

        document.getElementById("fileinput").value = "";
    };

    const OpenModel = (jobtitle) => {

        setModalStatus(true)
        setjobTitle(jobtitle)
    }

    const handleSubmit = async () => {
        // Implement form submission logic here
        // console.log(jobTitle);

        const { fullname, email, phone, qualification, coverletter, resume } = ApplicantDetails

        if (!fullname || !email || !phone || !qualification || !coverletter || !resume) {
            toast.info('please add complete details')
        }
        else {

            const reqBody = new FormData()

            for (let key in ApplicantDetails) {

                reqBody.append(key, ApplicantDetails[key])

            }

            reqBody.append("jobtitle", jobTitle)

            const reqHeader = { "Authorization": `Bearer ${token}` }

            const result = await addApplicationApi(reqBody, reqHeader)

            console.log(result);

            if (result.status == 200) {

                setTimeout(() => {
                    toast.success('application submitted successfully');
                }, 100);


                
                setModalStatus(false)
                handleReset()

            }
            else if (result.status == 400) {

                toast.warning(result.response.data)
                handleReset()

            }
            else {

                toast.error("something went wrong")
                handleReset()
                setModalStatus(false)

            }

        }
    };

    useEffect(() => {

        getAlljobs(searchkey);

        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }

    }, [searchkey]);

    return (
        <>
            <section className='banner py-10'>
                <Header />
                <h1 className='m-10 text-center pt-10 text-3xl'>Our Careers</h1>
            </section>


            <div className="p-20">

                <div className="flex mt-3 w-full justify-center">
                    <input
                        type="text"
                        className="border border-gray-200 placeholder-gray-200 p-2 md:w-1/4 w-1/2 shadow"
                        placeholder="Job Titles"
                        value={searchkey}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <button className="bg-green-800 text-white py-2 px-3 hover:border hover:bg-white hover:text-green-700">
                        Search
                    </button>
                </div>
            </div>

            <div className="md:px-20 py-5">
                {alljobs.length > 0 ? (
                    alljobs.map((item, index) => (
                        <div key={index} className="shadow border border-gray-500 my-4">
                            <div className="md:grid grid-cols-[8fr_1fr] p-5">
                                <div>
                                    <h1>{item?.title}</h1>
                                    <hr />
                                    <p className="mt-3">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-800" /> {item?.location}
                                    </p>
                                    <p className="mt-3">{item?.type}</p>
                                    <p className="mt-3">{item?.salary}</p>
                                    <p className="mt-3">{item?.qualification}</p>
                                    <p className="mt-3">{item?.experience}</p>
                                    <p className="mt-3 text-justify">{item.discription}</p>
                                </div>
                                <div className="flex md:justify-center items-start justify-end">
                                    <button
                                        onClick={() => OpenModel(item?.title)}

                                        className="bg-blue-800 text-white ms-3 mt-5 md:mt-0 p-3 hover:border hover:border-blue-800 hover:bg-white hover:text-blue-700"
                                    >
                                        Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Jobs</p>
                )}
            </div>

            {/* modal */}
            {modalstatus && (
                <div className="relative z-10">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-gray-900 px-4 py-3 flex justify-between sm:px-6">
                                    <h1 className="text-white text-2xl">Application Form</h1>
                                    <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} className="text-white fa-2x cursor-pointer" />
                                </div>

                                <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                                    <div className="grid grid-cols-2">
                                        <div className="p-3">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="p-2 mb-3 border w-full border-gray-400 rounded placeholder:text-gray-500"
                                                value={ApplicantDetails.fullname}
                                                onChange={(e) => setApplicantDetails({ ...ApplicantDetails, fullname: e.target.value })}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Email Id"
                                                className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                                                value={ApplicantDetails.email}
                                                onChange={(e) => setApplicantDetails({ ...ApplicantDetails, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="p-3">
                                            <input
                                                type="text"
                                                placeholder="Qualification"
                                                className="p-2 mb-3 border w-full border-gray-400 rounded placeholder:text-gray-500"
                                                value={ApplicantDetails.qualification}
                                                onChange={(e) => setApplicantDetails({ ...ApplicantDetails, qualification: e.target.value })}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                className="p-2 border w-full border-gray-400 rounded placeholder:text-gray-500"
                                                value={ApplicantDetails.phone}
                                                onChange={(e) => setApplicantDetails({ ...ApplicantDetails, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <textarea
                                            placeholder="Cover Letter"
                                            className="p-2 w-full border border-gray-400 rounded placeholder:text-gray-500"
                                            value={ApplicantDetails.coverletter}
                                            onChange={(e) => setApplicantDetails({ ...ApplicantDetails, coverletter: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-gray-400">Resume</p>
                                        <input
                                            type="file"
                                            id="fileinput"
                                            className="w-full border border-gray-400 rounded file:bg-gray-400 file:p-2 file:text-white"
                                            onChange={(e) => setApplicantDetails({ ...ApplicantDetails, resume: e.target.files[0] })}
                                        />
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-black sm:ml-3 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-black sm:mt-0 sm:w-auto"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <ToastContainer position="top-center" theme="colored" autoClose="2000" />

            <Footer />

        </>
    );
}

export default Careers;
