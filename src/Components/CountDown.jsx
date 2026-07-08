import { Typography, Box } from '@mui/material'
import { motion, useScroll } from 'motion/react'
// import { span } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function CountDown() {

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

    const [time, setTime] = useState({});
    useEffect(() => {
        const timer = setInterval(() => {
            const weddingTime = new Date('August 27, 2026 3:00 PM').getTime();
            const currentTime = new Date().getTime();
            const diff = weddingTime - currentTime
            console.log(diff);
            setTime({
                day: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        },1000)
    }, [])

    return (
        <div>
            <Container className='my-4'>
                <Row>
                    <Col>
                    <div className='d-flex justify-content-center'>                   
                        <Typography variant='h1' transition={{ duration: 2 }} viewport={{ once: true }}
                            sx={{ fontFamily: '"Great Vibes", cursive', color: '#6B5B50', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 500, textAlign: 'start', lineHeight: 1 }}>
                            <Box component="span" sx={{ fontFamily: '"Great Vibes", cursive', fontStyle: 'oblique', fontSize: { xs: 50, sm: 60, md: 65 } }}>The</Box><br /> <Box component='span' className='mx-5' sx={{ fontFamily: 'EB Garamond', display: 'inline-block' }}>COUNTDOWN</Box>
                        </Typography>
                        </div>
                        <Typography variant='body1' sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, fontFamily: 'EB Garamond', color: '#6B5B50', textAlign: 'center' }}>
                                    TO OUR FOREVER BEGINS
                                </Typography>
                                <div className='d-flex justify-content-between'>
                            <div className='text-center'>
                                <Typography variant='body1' sx={{  fontSize: { xs: 28, sm: 36, md: 42 }, fontFamily: '"Poppins", sans-serif', color: '#A88B75' }}>
                                    {time.day} :
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#8A7A6D', mt: -1 }}>
                                    Days
                                </Typography>
                            </div>
                            <div className='text-center'>
                                <Typography variant='body1' sx={{  fontSize: { xs: 28, sm: 36, md: 42 }, fontFamily: '"Poppins", sans-serif', color: '#A88B75' }}>
                                    {time.hours} :
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#8A7A6D', mt: -1 }}>
                                    Hours
                                </Typography>
                            </div>
                            <div className='text-center'>
                                <Typography variant='body1' sx={{  fontSize: { xs: 28, sm: 36, md: 42 }, fontFamily: '"Poppins", sans-serif', color: '#A88B75' }}>
                                    {time.minutes} :
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#8A7A6D', mt: -1 }}>
                                    Minutes
                                </Typography>
                            </div>
                            <div className='text-center'>
                                <Typography variant='body1' sx={{  fontSize: { xs: 28, sm: 36, md: 42 }, fontFamily: '"Poppins", sans-serif', color: '#A88B75' }}>
                                    {time.seconds}
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#8A7A6D', mt: -1 }}>
                                    Seconds
                                </Typography>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CountDown