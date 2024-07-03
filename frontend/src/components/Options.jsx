import React, { useState, useContext } from "react";
import { Button, Input, FormLabel, Heading, Grid, Box, Container, FormControl } from "@chakra-ui/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiClipboard, BiPhoneCall, BiPhoneOff } from "react-icons/bi";
import { SocketContext } from "../Context";
import "./Options.css"; // Import your CSS file

const Options = () => {
    const { me, callAccepted, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000); // Reset copied state after 1.5 seconds
  };

    return (
        <Container maxW="35vw" p="1" height="35vh" className="options-container">
            <Box>
                <FormControl display="flex" flexDirection="column" noValidate aria-autocomplete="none">
                    <Grid templateColumns='repeat(2, 1fr)' mt="1">
                        <Grid colSpan={1} p="3">
                            <Heading as="h7">Make a Call</Heading>
                            <FormLabel>User ID to call</FormLabel>
                            <Input type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} width="100%" />
                            {
                                callAccepted && !callEnded ? (
                                    <Button leftIcon={<BiPhoneOff />} onClick={leaveCall} mt="2" colorScheme='teal' variant='info'>
                                        Hang up
                                    </Button>
                                ) : (
                                    <Button leftIcon={<BiPhoneCall />} onClick={() => callUser(idToCall)} mt="2" colorScheme='teal' variant='solid'>
                                        Call
                                    </Button>
                                )
                            }
                        </Grid>
                        <Grid colSpan={1} p="3">
                            <Heading as="h6">Accept a Call</Heading>
                            <FormLabel>Share Your Id</FormLabel>
                             
                            <CopyToClipboard text={me} onCopy={handleCopy} mt="10">
                                <Button leftIcon={<BiClipboard />} colorScheme='teal' variant='solid'>
                                {copied ? 'Copied!' : 'Copy ID'}
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                </FormControl>
            </Box>
        </Container>
    );
}

export default Options;
