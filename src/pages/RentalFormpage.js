import React from 'react'
import RentalForm from '../components/RentalForm'
import Footer from '../components/Footer'

const RentalFormpage = () => {
  return (
    <motion
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}>
        {/* <img className='mx-auto h-64' src='./images/eating.png' alt='product'/> */}
      <RentalForm />
     <div className='-mt-20'>
      <img className='h-64 mx-auto' src='https://img.freepik.com/premium-vector/green-eco-city-banner_174191-51.jpg' alt='chef'/>
     </div>
      <Footer />
    </motion>
  )
}

export default RentalFormpage;