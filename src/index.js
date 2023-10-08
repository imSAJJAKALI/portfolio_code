import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeProvider, ColorModeScript, theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <ColorModeProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ColorModeProvider>
  </ChakraProvider>
 
);
