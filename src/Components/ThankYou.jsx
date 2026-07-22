import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Box, Typography } from '@mui/material'
import logo from '../assets/logo.png'
import { motion } from 'motion/react'

function ThankYou() {
    return (
        <section >
            <Container className='thanku-banner'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div>
                            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                                <Typography sx={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", fontFamily: '"Great Vibes", cursive', color: "#926650", fontSize: 28, fontWeight: 600, zIndex: 2 }}>
                                    D
                                </Typography>
                                <Box component="img" src={logo} sx={{ height: 200 }} />
                                <Box component="img" src="https://static.vecteezy.com/system/resources/thumbnails/050/698/881/small/two-gold-rings-free-png.png"
                                    sx={{ position: "absolute", top: "49%", left: "50%", transform: "translate(-50%, -50%)", height: 40, zIndex: 2 }} />
                                <Typography sx={{ position: "absolute", top: "65%", left: "50%", transform: "translateX(-50%)", fontFamily: '"Great Vibes", cursive', color: "#926650", fontSize: 28, fontWeight: 600, zIndex: 2 }}>
                                    D
                                </Typography>
                            </Box>
                            <Typography variant='h3' component={motion.h3} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                                sx={{ fontFamily: '"Great Vibes", cursive', color: "#926650", fontWeight: 600, textAlign: 'center' }}>Thank You</Typography>
                            <Typography variant='body1' sx={{ fontSize: { xs: 14, sm: 16, md: 18, lg: 20 }, fontFamily: 'EB Garamond', color: '#6B5B50', textAlign: 'center' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam enim laborum molestiae asperiores quibusdam placeat, quis aliquam, cum quo doloremque, quaerat nam veniam sit pariatur exercitationem omnis eveniet alias sed?
                                Facere at similique excepturi unde, minima tempora totam, enim optio voluptatibus officiis quo beatae ea ipsum, repudiandae voluptates sint expedita placeat explicabo rem voluptatem dicta? Assumenda tenetur laborum cupiditate nostrum?
                            </Typography>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* </motion.div> */}
        </section>
    )
}

export default ThankYou