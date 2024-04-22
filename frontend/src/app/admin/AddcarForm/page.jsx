'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const AddCarForm = () => {
    // Define the initial form values
    const initialValues = {
       
        brand: '',
        model: '',
        plateNumber: '',
        image: '',
        price: '',
        seats: '',
        type: '',
        year: '',
        Ac: false
    };

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
       
        brand: Yup.string().required('Brand is required'),
        model: Yup.string().required('Model is required'),
        plateNumber: Yup.string().required('Plate Number is required'),
        image: Yup.string().required('Image URL is required'),
        price: Yup.number().required('Price is required').min(0, 'Price must be 0 or greater'),
        seats: Yup.number().required('Seats are required').min(1, 'Must have at least 1 seat'),
        type: Yup.string().required('Type is required'),
        year: Yup.number().required('Year is required').min(1886, 'Year must be 1886 or later'),
        Ac: Yup.boolean()
    });

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        fetch('http://localhost:5000/car/add', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then((response) => {
            console.log(response.status);
            if(response.status === 200){
                toast.success('Car Added Successfully')
                resetForm();
            }else{
                toast.error('Some error occurred')
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Car</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                       
                       

                        {/* Brand */}
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                                Brand:
                            </label>
                            <Field
                                name="brand"
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="brand" component="div" className="text-red-500" />
                        </div>

                        {/* Model */}
                        <div className="mb-4">
                            <label htmlFor="model" className="block text-gray-700 font-medium mb-2">
                                Model:
                            </label>
                            <Field
                                name="model"
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="model" component="div" className="text-red-500" />
                        </div>

                        {/* Plate Number */}
                        <div className="mb-4">
                            <label htmlFor="plateNumber" className="block text-gray-700 font-medium mb-2">
                                Plate Number:
                            </label>
                            <Field
                                name="plateNumber"
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="plateNumber" component="div" className="text-red-500" />
                        </div>

                        {/* Image URL */}
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                                Image URL:
                            </label>
                            <Field
                                name="image"
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="image" component="div" className="text-red-500" />
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                                Price:
                            </label>
                            <Field
                                name="price"
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="price" component="div" className="text-red-500" />
                        </div>

                        {/* Seats */}
                        <div className="mb-4">
                            <label htmlFor="seats" className="block text-gray-700 font-medium mb-2">
                                Seats:
                            </label>
                            <Field
                                name="seats"
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="seats" component="div" className="text-red-500" />
                        </div>

                        {/* Type */}
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
                                Type:
                            </label>
                            <Field
                                name="type"
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="type" component="div" className="text-red-500" />
                        </div>

                        {/* Year */}
                        <div className="mb-4">
                            <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
                                Year:
                            </label>
                            <Field
                                name="year"
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="year" component="div" className="text-red-500" />
                        </div>

                        {/* AC */}
                        <div className="mb-4">
                            <label htmlFor="Ac" className="block text-gray-700 font-medium mb-2">
                                AC:
                            </label>
                            <Field
                                name="Ac"
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={isSubmitting}
                        >
                            Add Car
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddCarForm;
