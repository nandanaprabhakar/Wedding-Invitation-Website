import { Typography, Box, Card, CardContent } from '@mui/material'
import { motion } from 'motion/react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
function WeddingTimeline() {
  return (
    <div>
        <Container>
             <Typography variant='h1' component={motion.h1} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 2 }} viewport={{ once: true }}
                    sx={{ fontFamily: 'EB Garamond', color: '#6B5B50', fontSize: { xs: 50, sm: 60, md: 65 }, fontWeight: 500, textAlign: 'center', lineHeight: 1, }}>
                    <Box component="span" sx={{ fontFamily: 'EB Garamond', fontSize: { xs: 30, sm: 40, md: 45 } }}>WEDDING</Box><br /> <Box component='span' className='mx-5' sx={{ fontFamily: '"Great Vibes", cursive', fontStyle: 'oblique', display: 'inline-block' }}>timeline</Box>
                </Typography>
            <Row className='d-flex justify-content-center align-items-center mt-4'>
                
                <Col className='d-flex justify-content-center align-items-center'>
                 <Box sx={{ width: "100%", maxWidth: "700px", backgroundColor: "#FAF7F2", boxShadow: 2, borderRadius: '0px', pt: 2 }}>
                    {/* <FavoriteOutlinedIcon sx={{ color: "#A88B75", fontSize: '60px', position: 'absolute', top: -35, left: '50%', transform: 'translateX(-50%)' }}/> */}
      <CardContent sx={{ p: { xs: 2, md: 3 } }}> 
        <Timeline sx={{width: '100%', p: 0, m:0}} position="alternate">
      <TimelineItem sx={{width: '100%'}}>
        <TimelineSeparator>
          <FavoriteOutlinedIcon sx={{ color: "#A88B75",}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography component={motion.p} initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'EB Garamond', fontSize: { xs: "16px", sm: "17px", md: "18px" }, FontWeight: 600, color: '#A88B75'}}>
                8:00 AM
            </Typography>
             <Typography component={motion.p} initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'Cormorant Garamond', fontSize: { xs: "18px", sm: "20px", md: "24px" }, FontWeight: 600, color: '#6B5B50'}}>
                Guests Arrival
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{width: '100%'}}>
        <TimelineSeparator>
          <FavoriteOutlinedIcon sx={{ color: "#A88B75",}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography component={motion.p} initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'EB Garamond', fontSize: { xs: "16px", sm: "17px", md: "18px" }, FontWeight: 600, color: '#A88B75'}}>
                10:30 AM
            </Typography>
             <Typography component={motion.p} initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'Cormorant Garamond', fontSize: { xs: "18px", sm: "20px", md: "24px" }, FontWeight: 600, color: '#6B5B50'}}>
               Muhurtham
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FavoriteOutlinedIcon sx={{ color: "#A88B75",}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography component={motion.p} initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'EB Garamond', fontSize: { xs: "16px", sm: "17px", md: "18px" }, FontWeight: 600, color: '#A88B75'}}>
                11:30 AM
            </Typography>
             <Typography component={motion.p} initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'Cormorant Garamond', fontSize: { xs: "18px", sm: "20px", md: "24px" }, FontWeight: 600, color: '#6B5B50'}}>
               Wedding Sadya
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FavoriteOutlinedIcon sx={{ color: "#A88B75",}}/>
        </TimelineSeparator>
        <TimelineContent>
             <Typography component={motion.p} initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'EB Garamond', fontSize: { xs: "16px", sm: "17px", md: "18px" }, FontWeight: 600, color: '#A88B75'}}>
                12:00 PM
            </Typography>
             <Typography component={motion.p} initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} viewport={{ once: true }} sx={{fontFamily: 'Cormorant Garamond', fontSize: { xs: "18px", sm: "20px", md: "24px" }, FontWeight: 600, color: '#6B5B50'}}>
               Photoshoot
            </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      </CardContent>
     
    </Box>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WeddingTimeline