import { Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'motion/react'

function Invitation() {
   const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
  
    const handleCard1 = () => {
    setFade1(true);
  
    setTimeout(() => {
      setFade1(false);
    }, 6000); // Reappear after 3 seconds
  };
  const handleCard2 =()=>{
      setFade2(true);
      setTimeout(()=>{
          setFade2(false);
      },3000)
  }
  
  return (
    <div>
      <Container>
                <Typography variant='body' component={motion.p} initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'EB Garamond', color: '#6B5B50', fontSize: { xs: '20px', sm: '35px', md: 30, lg: 35 }, fontWeight: 500, mb: 4, textAlign: 'center' }}>
            INVITE YOU TO OUR WEDDING CELEBRATION
          </Typography>
          <Row>
                <Col lg={6}>
          <Box>
             <Typography variant='h2' component={motion.h1} initial={{opacity: 0, y:-50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'Cormorant Garamond', color: '#A88B75', fontSize: {xs: '40px', sm: '65px', md: 65}, fontWeight: 500, textAlign: 'center', ml: -6 }}>
           AUG
          </Typography>
          <div className='d-flex justify-content-center align-items-center gap-2 gap-md-4 gap-lg-5'>
             <Typography variant='h2' component={motion.h1} initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'Cormorant Garamond', color: '#A88B75', fontSize: {xs: '30px', sm: '60px', md: 55 }, fontWeight: 500, textAlign: 'center' }}>
          SUNDAY
          </Typography>
          <Box sx={{ backgroundColor: '#A88B75', width: '2px', height: '50px', }}/>
          <Typography variant='h2' component={motion.h1} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'Cormorant Garamond', color: '#A88B75', fontSize: {xs: '40px', sm: '65px', md: 55 }, fontWeight: 500, textAlign: 'center' }}>
          26
          </Typography>
          <Box sx={{ backgroundColor: '#A88B75', width: '2px', height: '50px', }}/>
          <Typography variant='h2' component={motion.h1} initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'Cormorant Garamond', color: '#A88B75', fontSize: {xs: '34px', sm: '60px', md: 55 }, fontWeight: 500, textAlign: 'center' }}>
          AT: 3:00 PM
          </Typography>
          </div>
           <Typography variant='h2' component={motion.h1} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: 'Cormorant Garamond', color: '#A88B75', fontSize: {xs: '40px', sm: '65px', md: 75 },  fontWeight: 500, textAlign: 'center', ml: -6 }}>
           2026
          </Typography>
          </Box>
                </Col>
                <Col lg={6} className="d-flex justify-content-center pt-5">
                  <div className="countDown-col">
                 
                    <div className="stack-card">
                       
                      <Card className="countDown-card">
                        <Card.Img src="https://i.pinimg.com/236x/7c/d5/b4/7cd5b48922760edefac35cde6c219d4e.jpg" />
                      </Card>
                    </div>
                    <motion.div className="stack-card" animate={{ opacity: fade2 ? 0 : 1 }} style={{ pointerEvents: fade2 ? "none" : "auto", zIndex: 2 }} transition={{ duration: 2 }} onClick={handleCard2}>
                  <Card className="countDown-card">
                    <Card.Img src="https://i.pinimg.com/236x/79/c1/cd/79c1cd711317a279c841a2e2ec3059d5.jpg" />
                  </Card>
                </motion.div>
                
                    <motion.div className="stack-card" animate={{ opacity: fade1 ? 0 : 1 }} style={{ pointerEvents: fade1 ? "none" : "auto", zIndex: 3 }} transition={{ duration: 2 }} onClick={handleCard1}>
                  <Card className="countDown-card">
                    <Card.Img src="https://i.pinimg.com/736x/db/f5/6b/dbf56b1f3306123469d1a2c044cee9a9.jpg" />
                  </Card>
                </motion.div>
                
                  </div>
                </Col>
              </Row>
            </Container>
    </div>
  )
}

export default Invitation