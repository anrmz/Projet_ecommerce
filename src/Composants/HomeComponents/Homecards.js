import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductsCard from '../HomeComponents/ProductsCard'
import card1 from '../../Images/womenprd1.jpg'
import card2 from '../../Images/womenprd2.webp'
import card3 from '../../Images/womenprd3.jpg'
import card4 from '../../Images/womenprd4.jpg'
import mensColl from '../../Images/Mencoll.png'
import men1 from '../../Images/men1.jpg'
import men2 from '../../Images/men2.jpg'
import men3 from '../../Images/men3.jpg'
const Homecards = () => {
  return (
    <Container className='w-100'>
    <h1 id='LatestProduct'>Latest Products</h1>
    <Row className='my-5 d-flex justify-content-between'>
     <ProductsCard img={card1} Title='Thick Pockets Coat' subtitle='ASDA DAZY Zipper Front  Puffer Thick Pockets Coat' rating="4.5" price="400 MAD" promo="-50%"/>
     <ProductsCard img={card2} Title='Thick Pockets Coat' subtitle='ASDA DAZY Solid Hooded Winter Thick Pockets Coat' rating="5" price="499 MAD" promo="-20%"/>
     <ProductsCard img={card3} Title='Knit Top' subtitle='ASDA Frenchy Solid Turtleneck Knit Top' rating="4.5" price="200 MAD" promo="-10%"/>
     <ProductsCard img={card4} Title='Sweater' subtitle='ASDA Turtleneck Raglan Sleeve Split Hem Sweater' rating="3.8" price="240 MAD" promo="-50%"/>
    </Row>
    <h1 id='LatestProduct'>Men's winter Collection</h1>
      <div className='d-flex flex-column flex-sm-row'>
        <img src={mensColl} style={{ width: '350px', height: '480px' }} className='my-5 mr-5' />
        <Row className='my-1 d-flex flex-column flex-md-row justify-content-start align-items-center'>
          <ProductsCard img={men1} Title='Outerwear Jacket' subtitle='ASDA Manfinity Homme Men Solid Bu' rating="5" price="300 MAD" promo="-50%" />
          <ProductsCard img={men2} Title='Outerwear Coat' subtitle='ASDA DAZY Solid Hooded Winter Thick Pockets Coat' rating="5" price="500 MAD" promo="-20%" />
          <ProductsCard img={men3} Title='Outerwear Coat' subtitle='ASDA Men Zip Up Puffer Vest Coat' rating="4" price="300 MAD" promo="-10%" />
        </Row>
      </div>

  </Container>
  )
}

export default Homecards
