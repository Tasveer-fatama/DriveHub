'use client';
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
const RegistartionForm = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: ""

    },
    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success(' User Register Successful');
            router.push("/login")
            resetForm();

          } else {
            toast.error('Error occurred. Please try again.');
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  })
  return (
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
                Sign up
              </h1>
              <p className="text-[12px] text-white">
                Hey enter your details to create your account
              </p>
            </div>
            <form action="" onSubmit={signupForm.handleSubmit}>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    id="name"
                    value={signupForm.values.name}
                    onChange={signupForm.handleChange}
                    placeholder="Enter your name"
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    id="email"
                    value={signupForm.values.email}
                    onChange={signupForm.handleChange}
                    placeholder="Enter your email"

                  />
                  {/* <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"

                  placeholder="Enter your phone"
                /> */}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    id="password"
                    value={signupForm.values.password}
                    onChange={signupForm.handleChange}
                    placeholder=" Enter your Password"
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    id="cpassword"
                    value={signupForm.values.cpassword}
                    onChange={signupForm.handleChange}
                    placeholder="Enter confirm Password"
                  />
                  <button type="submit" className="mt-5 tracking-wide font-semibold bg-yellow-600 text-white  w-full py-4 rounded-lg hover:bg-yellow-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-xs text-yellow-600 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="bg-white  text-yellow-400 font-bold py-2 px-4 rounded">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;
