import { useEffect, useContext } from "react";
import { Grid, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../Context";
import "./VideoPlayer.css"; // Import your CSS file

const VideoPlayer = () => {
  const navigate = useNavigate();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  useEffect(() => {
    if (stream) {
      myVideo.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (callAccepted && !callEnded && call.stream) {
      userVideo.current.srcObject = call.stream;
    }
  }, [callAccepted, callEnded, call]);

  return (
    <Grid justifyContent="center" templateColumns='repeat(2, 1fr)' gap={6} mt="12">
      {/* my video */}
      {stream && (
        <Box className="video-container">
          <video playsInline muted ref={myVideo} autoPlay className="video-element" />
          <Heading as="h5" size="md" mt={2}>
            {name || 'Name'}
          </Heading>
        </Box>
      )}
       
      {/* user's video */}
      {callAccepted && !callEnded && (
        <Box className="video-container">
          <video playsInline ref={userVideo} autoPlay className="video-element" />
          <Heading as="h5" size="md" mt={2}>
            {call.name || 'Name'}
          </Heading>
        </Box>
      )}
    </Grid>
  );
}

export default VideoPlayer;
