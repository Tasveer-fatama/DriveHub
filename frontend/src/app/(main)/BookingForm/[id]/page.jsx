'use client'
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useParams } from "next/navigation";
import { IconArmchair, IconNumber123 } from "@tabler/icons-react";
import Contact from "../../contact/page";
// import { IconArmchair, IconNumber123 } from "@tabler/icons-react";

const CarBookingForm = () => {

  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  const fetchCarData = () => {
    fetch(`http://localhost:5000/car/getbyid/${id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCarDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCarData();
  }, [])

  const displayCarDetails = () => {
    if (!carDetails) {
      return <div>Loading...</div>
    }
    return <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
              Fully customizable rules to match your unique needs
            </h2>

            <h3>other details</h3>

            <div>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  <IconArmchair /> Seats :
                </p>
                <p>{carDetails.seats}</p>
              </div>

              <div className="flex gap-3">
                <p className="flex gap-3">
                  <IconNumber123 /> Number Plate :
                </p>
                <p>{carDetails.plateNumber}</p>
              </div>

              <div className="flex gap-3">
                <p className="flex gap-3">
                  model :
                </p>
                <p>{carDetails.model}</p>
              </div>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  Brand :
                </p>
                <p>{carDetails.brand}</p>
              </div>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  price :
                </p>
                <p>{carDetails.price}</p>
              </div>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  Type :
                </p>
                <p>{carDetails.type}</p>
              </div>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  year :
                </p>
                <p>{carDetails.year}</p>
              </div>
            </div>

          </div>
          {/* End Col */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Tab Content */}
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>
                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>
                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>
              {/* End Tab Content */}
              {/* SVG Element */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        {/* Background Color */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800" />
        </div>
        {/* End Background Color */}
      </div>
    </div>
  }


  const CarBookingFormvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    pickup: Yup.string().required('Pickup is required'),
    destination: Yup.string().required('Destination is required'),
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
      {
        displayCarDetails()
      }

      <div className=" py-6 sm:py-8 lg:py-12 bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          {/* text - start */}
          <div className="mb-10 md:mb-16 ">
            <h2 className="mb-4 text-center text-2xl font-serif font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Rent the Car You Need
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
             
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
                First name
              </label>
              <input
                name="first-name"
                id="firstName"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.firstName}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
                {CarBookingForm.touched.name && (
                          <small class="text-danger">{CarBookingForm.errors.name}</small>
                        )}
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
               {CarBookingForm.touched.lastName && (
                          <small class="text-danger">{CarBookingForm.errors.lastName}</small>
                        )}
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
               name="email"
               id="email"
               onChange={CarBookingForm.handleChange}
               value={CarBookingForm.values.email}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.email && (
                          <small class="text-danger">{CarBookingForm.errors.email}</small>
                        )}
            </div>
           
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Contact Number
              </label>
              <input
                name="subject"
                id="phone"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.phone}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.phone && (
                          <small class="text-danger">{CarBookingForm.errors.phone}</small>
                        )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                 pickup
              </label>
              <input
                                name="message"
                                id="pickup"
                                onChange={CarBookingForm.handleChange}
                                value={CarBookingForm.values.pickup}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.pickup && (
                          <small class="text-danger">{CarBookingForm.errors.pickup}</small>
                        )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Destination
              </label>
              <input
                name="message"
                id="destination"
                onChange={CarBookingForm.handleChange}
                value={CarBookingForm.values.destination}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.destination && (
                          <small class="text-danger">{CarBookingForm.errors.destination}</small>
                        )}
            </div>
            <div>
              <label
                htmlFor="last-name"
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
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.date && (
                          <small class="text-danger">{CarBookingForm.errors.date}</small>
                        )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                  Timing
              </label>
              <input
              name="message"
               id="Timing"
               onChange={CarBookingForm.handleChange}
               value={CarBookingForm.values.timing}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
               {CarBookingForm.touched.timing && (
                          <small class="text-danger">{CarBookingForm.errors.timing}</small>
                        )}
            </div>
            
           
            
           
            
           
            
            
            <div className="flex items-center justify-between sm:col-span-2">
              <button  type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Book Now
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
