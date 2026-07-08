import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <Container className="vh-100 d-flex align-items-center justify-content-center">
                <Row className="w-100">
                    <Link to={'/l'}>
                    <Col className='banner'>
                    </Col>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage