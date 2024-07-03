import React from 'react'
import VideoPlayer from './VideoPlayer'
import Options from './Options'
import Notifications  from './Notifications'
import { Box, Heading, Container } from '@chakra-ui/react';
function Meet() {
  return (
    <>
    
        {/* <Box> */}
        {/* <Container maxW="1200px" mt="8"> */}
        <VideoPlayer /> 
        <Options /> 
        <Notifications /> 
        {/* </Container> */}
        {/* </Box>  */}
        </>
  )
}

export default Meet