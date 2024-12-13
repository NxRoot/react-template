import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import Home from './pages/Home';

// Get chakra theme color
const color = theme.config.initialColorMode

// Force chakra dark theme
localStorage.setItem("chakra-ui-color-mode", color)

// Select root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Inject root content
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={color} />
    <Home />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
