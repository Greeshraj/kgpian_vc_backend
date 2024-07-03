import React, { useContext } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { SocketContext } from "../Context";
import "./Notifications.css"; // Import your CSS file

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
                <Box className="notifications-container">
                    <Heading as="h6" className="notifications-header">
                        Notification
                    </Heading>
            {call.isReceivingCall && !callAccepted && (
                    <>
                    <Heading as="h3" className="notifications-message">
                        {call.name} is calling
                    </Heading>
                    <Button variant="outline" onClick={answerCall}>
                        Answer Call
                    </Button>
                    </>
            )}
                </Box>
        </>
    );
};

export default Notifications;
