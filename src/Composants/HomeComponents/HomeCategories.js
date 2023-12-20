import React from 'react'
import { Container, Row } from 'react-bootstrap'
import cat1 from '../../Images/category1.png'
import cat2 from '../../Images/Category2.png'
import cat3 from '../../Images/Category3.png'
import CardCategory from '../Category/CardCategory'
export default function HomeCategories() {
  return (
  
    <Container className='w-50'>
      <h1 id='newarrival'>NEW ARRIVALS IN</h1>
      <Row className='my-5 d-flex justify-content-between'>
      <CardCategory title="Women" img={cat1} background="#E8E8E8" category='/womens' />
      <CardCategory title="Men" img={cat2} background="#E8E8E8" category='/mens' />
      <CardCategory title="Kids" img={cat3} background="#E8E8E8" category='/kids' />
      </Row>
      
    </Container>
    
  )
}
