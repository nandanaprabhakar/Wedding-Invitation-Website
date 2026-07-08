import { Typography, Box } from '@mui/material'
import { motion } from 'motion/react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

function SaveTheDate() {
    return (
        <div>
            <Container className='my-3' style={{ backgroundColor: "#FAF7F2" }}>
                <Typography variant='h1' component={motion.h1} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
                    sx={{ fontFamily: 'EB Garamond', color: '#6B5B50', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 500, textAlign: 'center' }}>
                    SAVE{" "}
                    <Box component="span" sx={{ fontFamily: '"Great Vibes", cursive', fontStyle: 'oblique', fontSize: { xs: 50, sm: 60, md: 65 }, px: 1 }}>the{" "}</Box>
                    {" "}DATE
                </Typography>
                <Row style={{ position: 'relative', overflow: 'visible' }}>
                    <Col>
                        <Box sx={{ width: '100%' }}>

                            <Box component='img' sx={{ width: '100%' }} src='https://images.squarespace-cdn.com/content/v1/64638cbddd3bd07782e93043/13bda62d-10de-4057-b17c-ad687ff59b48/RAV00112.jpg' />
                        </Box>
                    </Col>
                    <Box sx={{ height: { xs: 90, sm: 200, md: 260, lg: 290 }, backgroundColor: '#FAF7F2', width: { xs: 100, md: 160 }, position: 'absolute', zIndex: 1, left: '50%', transform: 'translate(-50%, -50%)', top: '50%' }}>
                        <Box
  sx={{
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Typography
    sx={{
      fontFamily: "Cormorant Garamond",
      fontSize: { md: "42px", lg: "56px", xl: "64px" },
      fontWeight: 600,
      color: "#926650",
      lineHeight: 0.8,
    }}
  >
    22
  </Typography>

  <Typography
    sx={{
      fontFamily: "Cormorant Garamond",
      fontSize: { md: "42px", lg: "56px", xl: "64px" },
      fontWeight: 600,
      color: "#926650",
      lineHeight: 0.8,
    }}
  >
    08
  </Typography>

  <Typography
    sx={{
      fontFamily: "Cormorant Garamond",
      fontSize: { md: "42px", lg: "56px", xl: "64px" },
      fontWeight: 600,
      color: "#926650",
      lineHeight: 0.8,
    }}
  >
    2026
  </Typography>
</Box>
                        <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }, fontWeight: 600, color: "#926650", textAlign: 'center', mt:{ xs: 2, sx: 3, md: 4, lg: 4} }}>
                           <ArrowCircleLeftTwoToneIcon sx={{fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }}}/> Images
                        </Typography>

                        <Typography sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }, fontWeight: 600, color: "#926650", textAlign: 'center' }}>
                            Videos <ArrowCircleRightTwoToneIcon sx={{fontSize: { xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }}}/>
                        </Typography>
                    </Box>
                    <Col>
                        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
                            <Box component='img' sx={{ width: '100%' }} src='https://images.squarespace-cdn.com/content/v1/64638cbddd3bd07782e93043/13bda62d-10de-4057-b17c-ad687ff59b48/RAV00112.jpg' />
                        </Box>
                    </Col>
                </Row>
                <Typography variant='h1' component={motion.h1} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                    sx={{ fontFamily: '"Great Vibes", cursive', color: '#926650', fontSize: { xs: 30, sm: 40, md: 45 }, fontWeight: 600, textAlign: 'center', mt: 2 }}>
                    Dexter & Danica
                </Typography>
            </Container>
        </div>
    )
}

export default SaveTheDate