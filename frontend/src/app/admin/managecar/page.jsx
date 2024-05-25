'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageCars = () => {

  const [carList, setCarsList] = useState([]);

  const getCarsList = async(values) => {
      console.log(values);
      const res =  await fetch("http://localhost:5000/car/getall")
      console.log(res.status);
      const data = await res.json();
      console.log(data);
      setCarsList(data);
  }

  useEffect(() => {
  getCarsList();
  },[])

  const deletecar = async(id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/car/delete/"+id,{
      method:"DELETE"
    })
    console.log(res.status);
    if(res.status === 200){
      enqueueSnackbar("user deleted", {variant:"success"})
      getCarsList()
    }else{
      enqueueSnackbar("something went wrong", {variant:"error"})
    }
  }

  const displayCar = () => {
    return(
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Brand
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Model
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Seat
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Plate Number
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            AC
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Action
          </th>
        </tr>
      </thead>
      {
        carList.map((car) => {
          return(
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
               {car.brand}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {car.model}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {car.seats}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {car.seats}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {car.plateNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {car.Ac}
              </td>
              <td className="px-6 py-4  text-end text-sm font-medium">
                <button
                onClick={e => deletecar(car._id)}
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
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
              displayCar()
             }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageCars;