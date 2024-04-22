'use client'
import React from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col } from 'antd';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const BookingForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pickup: "",
    Destination: "",
    numberOfPersons: "1",
    luggage: "1",
    dateOfBooking: "",
    timing: "",
  };
  const bfvalidationSchema = Yup.object().shape({
       
    firstName: 
      Yup.string().required('Brand is required'),
      lastName: Yup.string().required('Model is required'),
      email : Yup.string().required('Plate Number is required'),
      phone: Yup.string().required('Image URL is required'),
      pickup: Yup.number().required('Price is required'),
      Destination: Yup.number().required('Seats are required'),
      numberOfPersons: Yup.string().required('Type is required'),
      luggage: Yup.number().required('Year is required'),
      dateOfBooking:Yup.number().required('Year is required'),
      timing: Yup.number().required('Price is required'),
});



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

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className="Booking bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://qph.cf2.quoracdn.net/main-qimg-1fb9ef8cd8afe23b9ef819a436583afd-lq')" }}>
      <div className="container mx-auto pt-14">
        <Row gutter={16} className='d-flex align-items-center'>
          <Col lg={16} style={{ position: 'relative' }}>
          </Col>
          <Col lg={8} className='text-left p-5'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {() => (
                <Form className="BookingForm">
                  <h1>Booking Form</h1>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="text" name="firstName" placeholder="First Name" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="text" name="lastName" placeholder="Last Name" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="tel" name="phone" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="text" name="Pickup" placeholder="Pickup" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="text" name="toAddress" placeholder="Destination" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field as="select" name="numberOfPersons" className="w-full px-3 py-2 border rounded-md">
                          <option value="1">1 Person</option>
                          <option value="2">2 Person</option>
                          <option value="3">3 Person</option>
                          <option value="4">4 Person</option>
                          <option value="5+">5+ Person</option>
                        </Field>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field as="select" name="luggage" className="w-full px-3 py-2 border rounded-md">
                          <option value="1">1 Luggage</option>
                          <option value="2">2 Luggage</option>
                          <option value="3">3 Luggage</option>
                          <option value="4">4 Luggage</option>
                          <option value="5+">5+ Luggage</option>
                        </Field>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="date" name="dateOfBooking" placeholder="Journey Date" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="booking__form mb-4">
                        <Field type="time" name="timing" placeholder="Journey Time" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </Col>
                  </Row>
                  <button type="submit" className='btn1 mt-2' style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BookingForm;
