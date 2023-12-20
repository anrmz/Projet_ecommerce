import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardCategory = ({ img, background, title ,category }) => {
  const cardStyle = {
    backgroundColor: background,

  };

  const textStyle = {
    marginTop: '-10px', backgroundColor:"white"
  };

  return (
    <Col xs="6" sm="6" md="4" lg="2" className='my-4 d-flex justify-content-center mx-5'>
      <div className='allcards mb-3' >
        <Link to={category}>
        <div className='category-Card' style={cardStyle}>
        <img src={img} className='Category-img' alt='card-title' />
        </div>
        </Link>
        <h3 className='Category-text my-3' style={textStyle}>{title}</h3>
      </div>
    </Col>
  );
};

export default CardCategory;
