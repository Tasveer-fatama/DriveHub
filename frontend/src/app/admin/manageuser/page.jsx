'use client';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const getUserList = async(values) => {
      console.log(values);
      const res =  await fetch("http://localhost:5000/user/getall")
      console.log(res.status);
      const data = await res.json();
      console.log(data);
      setUserList(data);
  }

  useEffect(() => {
  getUserList();
  },[])

  const displayUser = () => {
    return(
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
          >
            Password
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
        userList.map((user) => {
          return(
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
               {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {user.password}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
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
              displayUser()
             }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageUser;