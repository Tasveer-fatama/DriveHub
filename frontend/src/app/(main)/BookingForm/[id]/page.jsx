'use client'
import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useParams } from "next/navigation";

const CarBookingForm = () => {

  const { id } = useParams();

  const fetchCarData = () => {
    fetch(`http://localhost:5000/car/getbyid/${id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCarData();
  }, [])

  const displayCarDetails = () => {
    return <div className="grid grid-cols-12">
      <div className="col-span-4">
        <img src="" alt="" />
      </div>
      <div className="col-span-12"></div>
    </div>
  }
  

  const CarBookingFormvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    pickup: Yup.string().required('Pickup is required'),
    destination: Yup.string().required('Destination is required'),
    numberOfPersons: Yup.string().required('Number of Persons is required'),
    luggage: Yup.string().required('Luggage is required'),
    dateOfBooking: Yup.date().required('Date of Booking is required'),
    timing: Yup.string().required('Timing is required'),
  });
  const CarBookingForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pickup: "",
      destination: "",
      numberOfPersons: "1",
      luggage: "1",
      dateOfBooking: "",
      timing: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: CarBookingFormvalidationSchema
  });



  const handleSubmit = (values, { resetForm }) => {
    fetch('http://localhost:5000/bookingmodel/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('Booking Successful');
          resetForm();
        } else {
          toast.error('Error occurred. Please try again.');
        }
      }).catch((err) => {
        console.log(err);
      });
  };



  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Get in touch
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form onSubmit={CarBookingForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                id="firstName"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.firstName}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                name="last-name"
                id="las"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.lastName}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Number of Person
              </label>
              <input
                name="company"
                id="numberOfPersons"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.numberOfPersons}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="email"
                id="email"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.email}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                phoneNumber
              </label>
              <input
                name="subject"
                id="phone"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.phone}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                pickup
              </label>
              <input
                name="message"
                id="pickup"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.pickup}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Destination
              </label>
              <input
                name="message"
                id="destination"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.destination}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Lagguage
              </label>
              <input
                name="message"
                id="luggage"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.luggage}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Date
              </label>
              <input
                type="date"
                name="message"
                id="dateofBooking"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.dateOfBooking}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Timing
              </label>
              <input
                name="message"
                id="Timing"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.timing}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
              <span className="text-sm text-gray-500">*Required</span>
            </div>
            <p className="text-xs text-gray-400">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
          {/* form - end */}
        </div>
      </div>

    </div>
  );
};

export default CarBookingForm;
