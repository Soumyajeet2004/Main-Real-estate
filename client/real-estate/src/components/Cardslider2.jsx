import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './Styles/Cardslider2.css'

const Cardslider2 = ({properties}) => {
  return <>
    <Carousel indicators={false}>
        {properties.map((x,index)=>(
            <Carousel.Item key={index}>
                <img
                    className='d-block w-100 rounded mx-auto d-block'
                    src={x.image}
                    alt={x.name}
                    width={900}
                    height={300}
                />
                <Carousel.Caption className="caption-container">
                    <div className="caption-background">
                <h3 className="caption-title">{x.name}</h3>
              </div>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  </>
}

export default Cardslider2 ;