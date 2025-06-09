import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";


function EditProfile() {
  const [offcanvasStatus, setoffcanvasStatus] = useState(false)

  return (
    <>
      <div>
        <button
          onClick={() => setoffcanvasStatus(true)}
          className="text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white"
        >
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit
        </button>
      </div>

      {offcanvasStatus && (
        <div>
          {/* to make background light */}
          <div
            onClick={() => setoffcanvasStatus(false)}
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
          ></div>
          {/* offcavas content */}
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            {/* title od offcanvas */}
            <div className="bg-gray-900 text-white text-2xl px-3 py-4 flex justify-between">
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon
                onClick={() => setoffcanvasStatus(false)}
                icon={faXmark}
              />
            </div>
            <div className="flex justify-center items-center  flex-col">
              <label htmlFor="profilefile" className="mt-10">
                <input
                  type="file"
                  id="profilefile"
                  style={{ display: "none" }}
                  className=""
                />
                <img
                  src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
                  alt="no image"
                  style={{ height: "200px", width: "200px" }}
                />
                <div className="bg-yellow-300 z-53 fixed text-white py-3 px-4 rounded" style={{marginLeft:'135px',marginTop:'-50px'}}>
                <FontAwesomeIcon icon={faPen} />
                </div>
              </label>

              <div className="mb-3 w-full mt-5  px-5">
                  <input type="text" placeholder="Username" className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"/>
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                  <input type="text" placeholder="Password" className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"/>
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                  <input type="text" placeholder="Conform Password" className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"/>
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                  <textarea type="text" placeholder="Bio" className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"></textarea>
              </div>

              <div className="flex">
              <button className='bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white'>Reset</button>
              <button className='bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white'>Update</button>              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;
