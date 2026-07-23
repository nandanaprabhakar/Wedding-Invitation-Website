import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import logo from '../assets/d.PNG'


function LandingPage() {
    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center">
                <Row className="w-100">
                      <Typography variant='h1' component={motion.h1} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
                              sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, mt:2, wordSpacing: 8, textAlign: 'center' }}>
                              Dexter & Danica
                            </Typography>
                            <motion.h3 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
                             style={{ textAlign: 'center', color:'#A88B75' }}>Tap to open</motion.h3>
                            <Link to={'/l'} style={{ textDecoration: 'none' }}>
                   <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}>
                    <Col className='banner'>
                    {/* <img src={logo} height={200} style={{ color: '#C8A96A', position: 'absolute', left: '52%', top: '53%', transform: 'translate(-50%, -50%)' }}/> */}
                    </Col>
                    </motion.div>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage