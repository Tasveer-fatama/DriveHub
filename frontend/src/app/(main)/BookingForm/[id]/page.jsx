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
      fetch('http://localhost:5000/booking/add', {
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
    },
    validationSchema: CarBookingFormvalidationSchema
  });

  const bookingCar = useFormik({
    initialValues:{
      pickupLocation:"",
      bookDate:"",
      duration:"",
      paymentDetails:"",
      intendId:"",
      destination:""

    },
    onSubmit: (values, {resetForm}) => {
      fetch("http://localhost:5000/booking/add",{
        method:"POST",
        body:JSON.stringify(values),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success(' Car Booked Successful');
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
    <div>
      {
        displayCarDetails()
      }
    <div className="container mx-auto px-4 py-8 bg-black text-yellow-500">
  <h1 className="text-3xl font-bold text-center mb-8">Book a Car</h1>
  <form className="max-w-md mx-auto" onSubmit={bookingCar.handleSubmit}>
    <div className="mb-6">
      <label
        htmlFor="pickupLocation"
        className="block text-sm font-medium mb-2"
      >
        PICKUP LOCATION
      </label>
      <input
        id="pickupLocation"
        type="text"
        value={bookingCar.values.pickupLocation}
        onChange={bookingCar.handleChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="destination" className="block text-sm font-medium mb-2">
        DESTINATION
      </label>
      <input
        id="destination"
        value={bookingCar.values.destination}
        onChange={bookingCar.handleChange}
        type="text"
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div className="flex items-center">
          <label
            htmlFor="pickupDate"
            className="block text-sm font-medium mr-2"
          >
            PICKUP DATE
          </label>
          <input
            id="bookDate"
            value={bookingCar.values.bookDate}
            onChange={bookingCar.handleChange}
            type="date"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div className="flex items-center">
          <label htmlFor="hour" className="block text-sm font-medium mr-2">
            DAYS
          </label>
          <input
            id="duration"
            type="number"
            value={bookingCar.values.duration}
            onChange={bookingCar.handleChange}
            min={1}
            max={12}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
    <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">
      Book Now
    </button>
  </form>
</div>




    </div>
  );
};

export default CarBookingForm;
