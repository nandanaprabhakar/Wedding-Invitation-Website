import { Typography, Box, Button } from '@mui/material'
import { motion } from 'motion/react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Venue() {
    return (
        <div>
            <Container className='venuContainer'>
                <Typography variant='h1' component={motion.h1} initial={{opacity: 0, y:-50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
                    sx={{ fontFamily: '"Great Vibes", cursive', color: '#6B5B50', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 500, textAlign: 'center', lineHeight: 1 }}>
                    <Box component="span" sx={{ fontFamily: '"Great Vibes", cursive', fontStyle: 'oblique', fontSize: { xs: 50, sm: 60, md: 65 } }}>the</Box><br /> <Box component='span' className='mx-5' sx={{ fontFamily: 'EB Garamond', display: 'inline-block' }}>DETAILS</Box>
                </Typography>
                <Row>

                    <Col>
                  <div style={{ border: '2px solid #C8A96A', overflow: "hidden", padding: 0 }}>
                          <div className="d-flex justify-content-center">
                            <img style={{ opacity: 0.5 }} src="https://png.pngtree.com/png-vector/20260127/ourmid/pngtree-ornate-gold-wedding-mandap-with-floral-decorations-and-curtains-png-image_18616062.webp" alt="" />

                        </div>
                        <Typography variant='body1' sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 }, fontFamily: 'EB Garamond', color: '#6B5B50', textAlign: 'center', background: "linear-gradient(135deg, transparent 0%, #C8A96A 50%, transparent 100%)", py: 1, mb: 2, width: '100%' }}>
                            LOCATION
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: 14, sm: 16, md: 18, lg: 20 }, fontFamily: 'EB Garamond', color: '#6B5B50', textAlign: 'center' }}>
                            PAVILION BEACH RESORT, MUZHAPPILANGAD BEACH, KANNUR, KERALA
                        </Typography>
                        <a href='https://maps.app.goo.gl/PzzEZsgmMo3ejEAw8' target='_blank'>
                            <Button variant='contained' sx={{ background: "linear-gradient(135deg, transparent 0%, #C8A96A 50%, transparent 100%)", color: '#6B5B50', fontSize: { xs: 14, sm: 14, md: 14, lg: 16 }, borderRadius: '40px', position: 'relative', left: '50%', transform: 'translateX(-50%)', px: 6, py: 2, my: 2 }}>Location</Button>
                        </a>
                  </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Venue