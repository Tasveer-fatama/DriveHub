
import React from 'react'
// import Navbar from './(main)/Navbar/page'
import Header from './(main)/Header/page'
import Knowmore from './(main)/Knowmore/page'
import Services from './(main)/Services/page'
import Carlist from './(main)/Carlist/page'
import Testimonial from './(main)/Testimonial/page'
import Footer from './(main)/Footer/page'
  

const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <Knowmore/>
      <Services/>
      <Carlist/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default page
