import { Typography, Box, Button, duration } from '@mui/material'
import { motion, useScroll, useTransform } from 'motion/react'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import { option } from 'motion/react-client';
import logo from '../assets/logo.png'

function SaveTheDate() {
  const [sDate, setSDate] = useState(false)
  const [index, setIndex] = useState(0);
  const image = [
    { imgg: 'https://cdn0.weddingwire.in/vendor/3489/3_2/960/jpg/wedding-photography-retratos-by-sv-couple-shot-4_15_363489-161649342538636.jpeg' },
    { imgg: 'https://images.squarespace-cdn.com/content/v1/64638cbddd3bd07782e93043/13bda62d-10de-4057-b17c-ad687ff59b48/RAV00112.jpg' },
    { imgg: 'https://cdn0.weddingwire.com/vendor/684322/3_2/640/jpg/cam16793_51_2223486-176541087488866.jpeg' }
  ]

  const letterD='D'
  return (
    <div>
      <Container className='my-3' style={{ backgroundColor: "#FAF7F2" }}>
        <Typography variant='h1' component={motion.h1} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
          sx={{ fontFamily: 'EB Garamond', color: '#6B5B50', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 500, textAlign: 'center' }}>
          SAVE{" "}
          <Box component="span" sx={{ fontFamily: '"Great Vibes", cursive', fontStyle: 'oblique', fontSize: { xs: 50, sm: 60, md: 65 }, px: 1 }}>the{" "}</Box>
          {" "}DATE
        </Typography>
        <Row style={{ position: 'relative', overflow: 'visible', height: "auto", }}>
          {sDate == false ? <><Col>
            <Box sx={{ width: '100%' }}>

              <Box component='img' sx={{ width: '100%' }} src='https://images.squarespace-cdn.com/content/v1/64638cbddd3bd07782e93043/13bda62d-10de-4057-b17c-ad687ff59b48/RAV00112.jpg' />
            </Box>
          </Col>
            <Box sx={{ height: { xs: 90, sm: 200, md: 260, lg: 290 }, backgroundColor: '#FAF7F2', width: { xs: 100, md: 160 }, position: 'absolute', zIndex: 1, left: '50%', transform: 'translate(-50%, -50%)', top: '50%' }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { md: "42px", lg: "56px", xl: "64px" }, fontWeight: 600, color: "#926650", lineHeight: 0.8 }}>
                  22
                </Typography>

                <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { md: "42px", lg: "56px", xl: "64px" }, fontWeight: 600, color: "#926650", lineHeight: 0.8 }}>
                  08
                </Typography>

                <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { md: "42px", lg: "56px", xl: "64px" }, fontWeight: 600, color: "#926650", lineHeight: 0.8 }}>
                  2026
                </Typography>
              </Box>
              <Typography onClick={() => setSDate(true)} sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }, fontWeight: 600, color: "#926650", textAlign: 'center', mt: { xs: 2, sm: 3, md: 4, lg: 4 } }}>
                <ArrowCircleLeftTwoToneIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 } }} /> Images
              </Typography>

              <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }, fontWeight: 600, color: "#926650", textAlign: 'center' }}>
                Videos <ArrowCircleRightTwoToneIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 } }} />
              </Typography>
            </Box>
            <Col>
              <Box sx={{ width: '100%' }}>
                <Box component='img' sx={{ width: '100%' }} src='https://images.squarespace-cdn.com/content/v1/64638cbddd3bd07782e93043/13bda62d-10de-4057-b17c-ad687ff59b48/RAV00112.jpg' />

              </Box>
            </Col> </> : ''}
          {sDate == true ? <>

            <Col className='d-flex justify-content-center'>
              <Box sx={{ position: "relative", }}>
                <ClearTwoToneIcon sx={{ position: 'absolute', color: '#926650', fontSize: '40px', m: 1 }} onClick={() => setSDate(false)} />
                <Box key={index} sx={{ width: '100%' }} component={motion.img} initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 1 }} src={image[index].imgg} />
                <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 20 }}>
                  <ArrowCircleUpTwoToneIcon sx={{ color: '#926650', fontSize: '40px', display: 'inline-block' }} onClick={() => setIndex(index - 1)} visibility={index == 0 ? 'hidden' : 'visible'} />
                  <ArrowCircleDownTwoToneIcon sx={{ color: '#926650', fontSize: '40px', display: 'block' }} onClick={() => setIndex(index + 1)} visibility={index == image.length - 1 ? 'hidden' : 'visible'} />

                </Box>
              </Box>
            </Col>

          </> : ''}
        </Row>
        <div className='d-flex justify-content-center align-items-center'>
        <motion.h1 initial={{y: 0, x: 0, color: '#926650',}} whileInView={{y: '25vh', translateX: '190%', color: '#C89B3C', fontSize: "clamp(30px, 5vw, 65px)"}} transition={{duration: 5}} style={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, }}>{letterD}</motion.h1>
        <Typography variant='h1' component={motion.h1} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
          sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, mt:2 }}>
      
          exter
        </Typography>
         <Typography variant='h1' component={motion.h1} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
          sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, mt:2, ml:4 }}>
      &
        </Typography>
                <motion.h1 initial={{y: 0, x: 0, color: '#926650',}} whileInView={{y: '49vh', x:-20, color: '#C89B3C', fontSize: "clamp(30px, 5vw, 65px)"}} transition={{duration: 5}} style={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, }}>{letterD}</motion.h1>
          <Typography variant='h1' component={motion.h1} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
          sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, mt:2 }}>anica
        </Typography>
</div>
      </Container>
      <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 2 }}
  viewport={{ once: true }}
>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <div>
              <Box sx={{ position: "relative", display: 'flex', justifyContent: 'center' }}>
                <Box component='img' src={logo} sx={{ height: 400 }} />
               
                <Box component='img' sx={{ position: 'absolute', top: '49%', left: '50%', transform: 'translate(-50%, -50%)', }} src='https://static.vecteezy.com/system/resources/thumbnails/050/698/881/small/two-gold-rings-free-png.png' height={70} />
         
              </Box>
             
                 <Typography
                   sx={{
                     fontFamily: '"Great Vibes", cursive',
                     color: "#926650",
                     fontSize: { xs: 50, md: 80 },
                     fontWeight: 600,
                     textAlign: 'center'
                   }}
                 >
                   Thank You
                 </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      </motion.div>
    </div>
  )
}

export default SaveTheDate