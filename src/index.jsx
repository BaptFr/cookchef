import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import  './assets/styles/index.scss';
import { ApiContext } from './context/ApiContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipesdatas">
    <App />
    </ApiContext.Provider>
  </StrictMode>,
)
