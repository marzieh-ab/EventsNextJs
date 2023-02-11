import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function Mainlayout({children}) {
  return (
    <>
   <Header />
        <main>{children}</main> 
      <Footer />
    </>
  )
}

export default Mainlayout