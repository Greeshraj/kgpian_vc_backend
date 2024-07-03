import { useState, useContext } from "react"
import { Button, Input, FormLabel, Heading, Grid, Box, Container, FormControl } from "@chakra-ui/react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiClipboard, BiPhoneCall, BiPhoneOff } from "react-icons/bi";
import { SocketContext } from "../Context";
import './Header.css';

const Header = () => {
  const { me, name } = useContext(SocketContext);
  return (
    <header className="header-container">
      <h1>KGPIAN MEET</h1>
    </header>
  );
};

export default Header;
