import { Typography } from '@mui/material'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Invitation from '../Components/Invitation'
import CountDown from '../Components/CountDown'
import Venue from '../Components/Venue'
import WeddingTimeline from '../Components/WeddingTimeline'
import SaveTheDate from './SaveTheDate'
import ThankYou from '../Components/ThankYou'

function HomePage() {

  return (
    <div >
      <motion.Container fluid initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3 }}>
        <Row>
          <Col className='couple-banner'>
          <Typography variant='h1' component={motion.h1} initial={{opacity: 0, y:-50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
          sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: '50px', sm: '100px', md: '150px', lg: '200px' }, fontWeight: { xs: 'bold', sm:'bold', md: 400, lg: 400 }, mb: 4 }}>
            Dexter & Danica
          </Typography>
          </Col>
        </Row>
      </motion.Container>
      <Invitation/>
      <CountDown/>
      <Venue/>
      <WeddingTimeline/>
      <SaveTheDate/>
      <ThankYou/>
    </div>
  )
}

export default HomePage