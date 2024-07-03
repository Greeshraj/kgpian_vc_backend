import './Home.css';
// import { Heading } from '@chakra-ui/react';
import React, { createContext, useState, useRef, useEffect } from 'react';
import { SocketContext } from "../Context"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormLabel, Heading, Grid, Box, Container, FormControl } from "@chakra-ui/react"
const Home = () => {

  const {name, setName,email,setEmail} = useContext(SocketContext);
//   const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    navigate('/newmeet');
  };

  return (
    <div className="home-container">
      <h1>Welcome to KGPIAN MEET</h1>
      <form onSubmit={handleSubmit} className="info-form">
      <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)} width="100%" /> */}
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
         
        <button type="submit">Enter meet page</button>
      </form>
    </div>
  );
};

export default Home;
