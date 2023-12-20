import React from 'react'
import { Card ,Col} from 'react-bootstrap'
import favicon from '../../Images/favicon.png'
import rate from '../../Images/rateIcon.png'
import { Link } from 'react-router-dom'

const ProductsCard = ({img,Title,subtitle,rating,price,promo}) => {
  return (
    <Col xs="6" sm='6' md='4' lg='3' className='d-flex'>
    <Card style={{ width: '1000px',height:'fix-content',borderRadius:'8px',
     border:"none",backgroundColor:'#E8E8E8',
     boxShadow:'8px 8px 2px 1px rgba(0, 0, 255, .2)',marginBottom:'30px', marginTop:'0px',marginRight:'10px'
}}>
     <Card.Img style={{ width: '95%',height:'250px', margin:"auto"}} src={img}/>
      <div className='d-flex justify-content-end align-items-start position-absolute top-0 end-0 p-2'>

        <img  src={favicon} className='text-start' style={{
            width:'26px',
            height:'24px'}}/>
      </div>
    <Card.Body className='p-auto'>
    <div className='text-start'>
      <Card.Title> <div className='card-title'>
       {Title} </div></Card.Title>
       </div>
      <Card.Subtitle className="mb-2 text-muted text-start" style={{fontSize:'14px'}}> {subtitle}</Card.Subtitle>
      <Card.Text>
     <div className='d-felx justify-content-between'>
         <div className='d-flex '>
            <img src={rate} className='text-center' style={{
            width:'26px',
            height:'24px'}}/>
            <div className='rate-text m-0 p-0'>{rating}</div>
        
         <div className='card-price' style={{fontSize:"16px",marginLeft:'50px'}}><span className='text-danger mr-1' style={{fontSize:'12px'}}>{promo}</span>{price}</div>
         </div>
     </div>
      </Card.Text>
      <div className='text-start'>
      <Link  className='btn btn-light'>
              Details
            </Link></div>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default ProductsCard
