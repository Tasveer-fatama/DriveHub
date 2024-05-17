'use client';
import React, { useEffect, useState } from 'react'

const BookingDetails = () => {

    const [bookingList, setBookingList] = useState([]);

    const getBooking = async (values) => {
        console.log(values);
        const res = await fetch("http://localhost:5000/booking/getall")
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setBookingList(data);

    }

    useEffect(() => {
        getBooking()
    }, [])

    const displaybooking = () => {
        return (
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                            pickupLocation
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                            bookDate
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                            duration
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                            destination
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                            paymentDetails
                        </th>
                    </tr>
                </thead>
                {
                    bookingList.map((book) => {
                        return (
                            <tbody>
                                <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                        {book.pickupLocation}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {new Date(book.bookDate).toDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {book.duration}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {book.destination}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        ₹{book.paymentDetails.amount/100}
                                    </td>
                                </tr>

                            </tbody>
                        )
                    })
                }

            </table>
        )
    }

    return (
        <div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            {
                                displaybooking()
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingDetails
