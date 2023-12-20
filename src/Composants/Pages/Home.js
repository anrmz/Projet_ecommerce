import React from 'react'
import Slider from '../HomeComponents/Slider';
import HomeCategories from '../HomeComponents/HomeCategories';
import Homecards from '../HomeComponents/Homecards';
import ClientsReview from '../HomeComponents/ClientsReview';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeCategories/>
      <Homecards/>
      <br/> <br/> 
      <ClientsReview/>
      
      <Footer/>
    </div>
  )
}

export default Home
