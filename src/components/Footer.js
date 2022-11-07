import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'



const Footer = () => {
    return (
        <>
            <div className='py-3  mt-3 bg-dark text-light'>
                <Container className='d-flex footercont justify-content-between'>
                    <div>
                        <h6 className='text-primary' >ABOUT</h6>
                        <ListGroup.Item>Help</ListGroup.Item>
                        <ListGroup.Item>Contact Us</ListGroup.Item>
                        <ListGroup.Item>Feedback</ListGroup.Item>
                        <ListGroup.Item>Unsubscribe</ListGroup.Item>
                        <ListGroup.Item>Reservations</ListGroup.Item>
                    </div>
                    <div>
                        <h6 className='text-primary' >POLICIES</h6>
                        <ListGroup.Item>Privacy Policy</ListGroup.Item>
                        <ListGroup.Item>Terms of use</ListGroup.Item>
                        <ListGroup.Item>Gift card conditions</ListGroup.Item>
                        <ListGroup.Item>Shipping</ListGroup.Item>
                        <ListGroup.Item>Return</ListGroup.Item>
                    </div>
                    <div>
                        <h6 className='text-primary' >CATEGORIES</h6>
                        <ListGroup.Item>Men</ListGroup.Item>
                        <ListGroup.Item>Women</ListGroup.Item>
                        <ListGroup.Item>Accessories</ListGroup.Item>
                        <ListGroup.Item>Shoes</ListGroup.Item>
                        <ListGroup.Item>Denim</ListGroup.Item>
                    </div>
                    <div>
                        <h6 className='text-primary' >Shop-App</h6>
                        <ListGroup.Item>



                        </ListGroup.Item>
                        <ListGroup.Item>301 The Greenhouse London,
                            E2 8DY UK
                        </ListGroup.Item>
                        <ListGroup.Item>support@domain.com</ListGroup.Item>
                        <ListGroup.Item>820-885-3321</ListGroup.Item>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
