'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import {enqueueSnackbar} from "notistack" 

const ResetPassword = () => {

  const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

   const router = useRouter();

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbymail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            enqueueSnackbar('Email not registered', { variant: 'error' });
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        // console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            enqueueSnackbar('Invalid OTP', { variant: 'error' });
        }
    }

    const updatePassword = async (values) => {
        const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('Password updated successfully', { variant: 'success' });
            navigate("/login")
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: updatePassword
    });

  return (
    <div>
      <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-black border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-black text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/1d/42/1b/1d421b66d9934f1c58aae3faa4a72ae4.jpg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-yellow-400">
              Reset Password
              </h1>
              <p className="text-[12px] text-white">
                Hey enter your details to create your account
              </p>
            </div>
            
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                 
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    id="email"
                    placeholder='Enter your email'
                    ref={emailRef}


                  />
                   <button onClick={sendOTP} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Send OTP
                    </button>
                 
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter your otp"
                    ref={otpRef}
                  />
                    <button onClick={verifyOTP} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Verify OTP
                    </button>
                    {
                      showForm && (
                        <form onSubmit={resetForm.handleSubmit}>
                        <input
                          className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          type="password"
                          id="password"
                          value={resetForm.values.password}
                          onChange={resetForm.handleChange}
                         
                          placeholder="Enter your Password"
                        />
                        <input
                          className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          type="password"
                          id="confirmPassword"
                          value={resetForm.values.confirmPassword}
                          onChange={resetForm.handleChange}
                         
                          placeholder="Repeat your Password"
                        />
                          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                          </form>
                      )
                    }
                 
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ResetPassword;