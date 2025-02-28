import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApiContext } from './context/ApiContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.js';
import  './assets/styles/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router { router }>
      <ApiContext.Provider value="https://restapi.fr/api/recipesdatas">
      </ApiContext.Provider>
    </RouterProvider>
  </StrictMode>,
)
