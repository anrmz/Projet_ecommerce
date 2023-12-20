import React,{useState} from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';


export default function Acceuil() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
 
  <Carousel activeIndex={index} onSelect={handleSelect} className='m-0 p-0'>
      <Carousel.Item id="promo1" interval={2000}>
        <div className='d-flex flex-row justify-content-center align-item-start'>
       
        <Carousel.Caption className='carousel-caption p-0 m-0 text-start' >
        <div className="carousel-caption text-start">
            <h1 id='heading1'>Save Up <br/>to 50%</h1>
            <p className="opacity-75">Prices Slashed for a Limited Time.</p>
            <p><span className="btn btn-lg btn-light" href="#">Shop Now</span></p>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item id="promo2" interval={2000}>
        <div className='d-flex flex-row justify-content-center align-item-start'>
        
       
        <Carousel.Caption className='carousel-caption p-0 m-0 '>
        <div className="carousel-caption text-start">
        <h1 className='heading2'>Discover the new collection of Winter</h1>
            <p><span className="btn btn-lg btn-light" href="#"> Shop Now</span></p>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item id="promo3" interval={2000}>
        <div className='d-flex flex-row justify-content-center align-item-start'>
       
      
        <Carousel.Caption className='carousel-caption p-0 m-0' style={{ position: "absolute",
  top: '100px', 
  left: '40%',
  transform: 'translateX(-80%)'}}>
        <div className="carousel-caption text-start">
             <h1 className='heading2 text-start'>Explore Your Style</h1>
            <p>UP TO 50% OFF</p>
            <p><span className="btn btn-lg btn-light browse" href="#">Browse gallery</span></p>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
