import React from 'react'
import AdminNavbar from './navbar'


const Layout = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-2 grid-flow-col ">
                <div className="row-span-2">

                    <AdminNavbar />
                </div>
                <div className="col-span-1 mt-4">

                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout