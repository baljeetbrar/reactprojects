import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
      <Row className='homepage-wrapper d-flex '>
        <Col>
          <div className='my-information text-center'>
            <h1 className='text-bold uppercase text-left'>hi, i'm Baljeet <br/> Creative Coder</h1>
            <p className='text-left'>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
            <button className='text-left'>Download CV</button>
          </div>
        </Col>  
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Home