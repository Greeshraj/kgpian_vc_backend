import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { ContextProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
          <ChakraProvider>
          <BrowserRouter>
          <App />
        </BrowserRouter>
          </ChakraProvider>
        </ContextProvider>
    </React.StrictMode>
);
