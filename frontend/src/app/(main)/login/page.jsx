'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values, actions) => {
    console.log('Submitted login form:', values);
    actions.setSubmitting(false);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="login relative h-screen overflow-hidden mt-0 " > {/* Tailwind CSS classes */}
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-1fb9ef8cd8afe23b9ef819a436583afd-lq"
        alt="Car background"
        className="absolute inset-0 object-cover w-full h-full z-0 mt-0" // Added mt-3 class// Added pt-20 class
        />
        

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"> {/* Tailwind CSS classes */}
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-8">Login</h1> {/* Tailwind CSS classes */}
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Tailwind CSS classes */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2 text-yellow-500">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div className="text-red-500 text-xs">{errors.email}</div>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium mb-2 text-yellow-500">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <div className="text-red-500 text-xs">{errors.password}</div>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;