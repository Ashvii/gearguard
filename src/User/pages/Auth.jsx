import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApi, registerApi } from "../../Api Services/AllApi";

function Auth() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      toast.error("Please fill the complete details");
      return;
    }

    try {
      const result = await registerApi({ username, email, password })
      console.log(result);

      if (result.status == 200) {

        toast.success('Register successfull')

        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

        setRegister(false)
        navigate('/login')

      }
      else if (result.status == 409) {

        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

      }
      else {

        toast.error('Something went wrong')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

      }

    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleLogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.info("Please enter complete details");
      return;
    }

    try {
      const result = await loginApi({ email, password });

      if (result.status === 200) {

        toast.success("Login successful");
        setUserDetails({ username: "", email: "", password: "" });
        sessionStorage.setItem("user", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)

        if (result.data.existingUser.email == "gearguardadmin@gmail.com") {
          navigate("/admin-home")
        }
        else {
          navigate("/OurServices")
        }

      } else if (result.status === 409) {

        toast.warning(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {

        toast.error("Something went wrong");
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const toggleForm = () => {
    setRegister(!register);
    setUserDetails({ username: "", email: "", password: "" }); // reset form on toggle
  };

  return (
    <div id="auth">
      <div className="md:grid grid-cols-3 ">
        <div></div>

        <div className="flex justify-center items-center flex-col ">
          

          <form className="w-full mt-20 bg-black p-10 flex justify-center items-center flex-col" style={{borderRadius:"15%"}}>
            <div
              className="text-white border border-red-800 flex justify-center items-center bg-red-800"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            >
              <FontAwesomeIcon icon={faUser} className="fa-2x" />
            </div>

            <h2 className="text-white my-5 text-3xl">
              {register ? "Register" : "Login"}
            </h2>

            {register && (
              <div className="mb-5 w-full">
                <input
                  type="text"
                  className="p-2 rounded bg-white w-full"
                  placeholder="Username"
                  value={userDetails.username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </div>
            )}

            <div className="mb-5 w-full">
              <input
                type="email"
                className="p-2 rounded bg-white w-full"
                placeholder="Email Id"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>

            <div className="mb-5 w-full">
              <input
                type="password"
                className="p-2 rounded bg-white w-full"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </div>

            <div className="mb-5 w-full flex justify-between">
              <p className="text-amber-300 text-sm">Never share your Password</p>
              {!register && (
                <p className="text-white underline text-sm cursor-pointer">
                  Forget Password
                </p>
              )}
            </div>

            <div className="mb-2 w-full">
              <button
                className="bg-red-800 text-white w-full p-3 rounded"
                type="button"
                onClick={register ? handleRegister : handleLogin}
              >
                {register ? "Register" : "Login"}
              </button>
            </div>

            

            <p className="text-white mt-2">
              {register ? "Already have an account? " : "New user? "}
              <span
                onClick={toggleForm}
                className="text-blue-800 underline cursor-pointer"
              >
                {register ? "Login" : "Register"}
              </span>
            </p>
          </form>
        </div>

        <div></div>
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </div>
  );
}

export default Auth;
