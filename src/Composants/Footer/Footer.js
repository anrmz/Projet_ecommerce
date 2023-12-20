import React from 'react'
import './Footer.css'
import Newsletter from './NewsLetter'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import masterCard from '../../Images/masterCard.png'
import visa from '../../Images/visa.png'


function Footer() {
  return (  
    <div style={{ position:'' , top:'100px' }}>
         <Newsletter />
         <footer className="mt-5 bg-dark">
                
                <div className='row w-100 m-0 justify-content-center mx-md-5 px-3 px-sm-5 pt-5'>
                      
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                          <h5 className='text-center text-sm-start'>Categories</h5>
                          <div className='mt-4 d-flex justify-content-start align-start flex-column'>
                              <a href="/" className='text-center text-sm-start'>Women</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Men</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Kids</a>
                             
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4 pb-4">
                          <h5 className='text-center text-sm-start'>About us</h5>
                          <div className='mt-4 d-flex justify-content-start align-start flex-column'>
                              <a href="/" className='text-center mt-1 text-sm-start'>About us</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>media center</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Privacy & Policy</a>
                               <a href="/" className=' text-center mt-1 text-sm-start'>Terms & Conditions</a>
                          </div>
                      </div>
                      
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                          <h5 className='text-center text-sm-start mt-4'>Paiment methods</h5>
                          <div className='d-flex justify-content-center justify-content-sm-start creditCards mt-3 ms-2'>
                             <img src={masterCard} alt="" /> 
                             <img src={visa} alt="" className='ms-3' /> 
                          </div>
                      </div>
                </div>

                <dir className="lastPartFooter d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5 px-0 pb-4 pb-lg-0 px-2 px-lg-5 mx-0 ">
                      <div className='order-1 order-lg-0 d-flex justify-content-center align-items-center flex-column flex-lg-row ms-lg-5'>
                          <p className=' mt-lg-3'> &copy; All Rights Reserved. By <a href="/" target='_blank' style={{ color:"#feebf3" }}>ASDA FASHION</a> </p>
                          
                      </div>
                      <dir className="order-0 order-lg-1 footerSocials ms-lg-auto d-flex justify-content-center px-0 me-lg-5">
                          <a href="/" className='text-white m-2 text-decoration-none'><InstagramIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><FacebookIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><TwitterIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><YouTubeIcon /></a>
                      </dir>
                </dir>
         </footer>
         </div>
  )
}

export default Footer