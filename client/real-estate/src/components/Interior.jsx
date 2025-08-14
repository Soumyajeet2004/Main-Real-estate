import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import propertyData from '../data/datas2';
import Cardslider2 from './Cardslider2';
import '../components/Styles/Interior.css';

const Interior = () => {
  return (
    <>
      {/* Hero Carousel */}
      <Cardslider2 properties={propertyData}></Cardslider2>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="g-4">
          {[
            
            { title: 'On-time Delivery', img: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg' },
            { title: 'Interior Design Gallery', img: 'https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/luxury_flats_3_023b1bafae.webp' },
            { title: 'Trending', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC7RAKPwG3FQAB21VZe0CkI3Gaee3SU8Q1w&s' },
            { title: 'Best Selling Kitchens', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsxprsb_Uccr0ZCSKC7yujcQ7zWvHt-k-OA&s' }
          ].map((feature, idx) => (
            <Col md={3} key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={feature.img} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>Discover our stunning collection.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Services Section */}
      <section className="services text-center py-5 bg-light">
        <Container>
          <h2 className="mb-4">Our Services</h2>
          <ul className="list-unstyled fs-5">
            <li>Modular Kitchens</li>
            <li>False Ceiling</li>
            <li>Lighting & Painting</li>
            <li>Flooring & Carpentry</li>
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center py-5">
        <Container>
          <h2 className="mb-4">What Our Clients Say</h2>
          <blockquote className="blockquote">
            “Our designer took us through our options in extraordinary detail …” — 3 BHK client
          </blockquote>
        </Container>
      </section>
      
    </>
  );
};

export default Interior;
