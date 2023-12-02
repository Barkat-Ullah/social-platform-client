/* eslint-disable react/no-unknown-property */

import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reError, setReError] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate() 
  
    const handleRegister = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
    
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const capturedEmail = form.get("email");
      const capturePassword = form.get("password");
      const photo = form.get("photo");
      
      console.log(name, email, password, photo );
  
      if (password.length < 6) {
        setReError("Password should be at least 6 characters or longer");
      } else if (!/[A-Z]/.test(password)) {
        setReError("Password should contain at least one capital letter");
        return;
      } else if (!/[@#$%^&+=!]/.test(password)) {
        setReError("Password should contain at least one special character");
        return;
      }
  
      setReError("");
      setSuccess("");
  
      createUser(capturedEmail, capturePassword)
        .then((result) => {
          console.log(result.user);
          setSuccess("Your account was registered!");
          // navigate('/')
          
          updateProfile(result.user, {
            displayName:name, photoURL:photo
          })
          .then(() => {
            console.log("user profile info updated");
            const userInfo = {
              name: name,
              email: capturedEmail 
            };
  
            axiosPublic.post('/users', userInfo)
            .then(res => {
              console.log(res.data);
              if(res.data.insertedId){
              
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate ("/");
              }
            })
  
           
          })
          .catch((error) => console.log(error));
        })
  
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            setReError("Email is already in use. Please choose another email.");
          } else if (error.code === "auth/invalid-email") {
            setReError("Invalid email address.");
          } else if (error.code === "auth/weak-password") {
            setReError("Password should be at least 6 characters long.");
          } else {
            setReError("An error occurred during registration.");
          }
        });
    };
  
    return (
      <div>
        <div>
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleRegister} className="w-full max-w-md">
              <div className="flex items-center justify-center mt-6">
                <a
                  href="#"
                  className="w-1/3 pb-4 mb-3 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                >
                  sign up
                </a>
              </div>
  
              {reError && (
                <div className="alert alert-error text-slate-600 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Error! {reError}</span>
                </div>
              )}
              {success && (
                <div className="alert alert-success my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{success}</span>
                </div>
              )}
  
              <div className="relative flex items-center mb-[-13px]">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
  
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>
  
              <div className="relative flex items-center mt-8 mb-4">
                <span className="absolute left-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </span>
  
                <input
                  type="text"
                  name="photo"
                  required
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="photo"
                />
              </div>
  
             <div>
             <span className="absolute mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </span>
                <input
                  type="email"
                  name="email"
                  onBlur={e => setEmail(e.target.value)}
                  required
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#3BB] dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
  
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
  
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  onBlur={e => setPassword(e.target.value)}
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#3BB] dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
                <span onClick={() => setShow(!show)} className="absolute right-2">
                  {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
  
              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                  Sign Up
                </button>
  
                <div className="mt-6 text-center ">
                  <p className="text-center mb-3">
                    Already Have an account. please{" "}
                    <Link className="link link-primary font-bold" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default Register;