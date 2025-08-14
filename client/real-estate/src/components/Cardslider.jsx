import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const Cardslider = ({properties}) => {
  return <>
    <Carousel>
        {properties.map((x,index)=>(
            <Carousel.Item key={index}>
                <img
                    className='d-block w-50 rounded mx-auto d-block'
                    src={x.image}
                    alt={x.name}
                    width={900}
                    height={300}
                />
                <Carousel.Caption>
                    <Card bg='transparent' text='black' border='none' width={30} className='mx-auto' style={{backgroundColor: 'rgba(255, 251, 251, 0.8)', color: '#000',padding: '1px',border: 'none',borderRadius: '10px',maxWidth: '300px',boxShadow: '0 2px 10px rgba(0,0,0,0.15)',}}>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  </>
}

export default Cardslider