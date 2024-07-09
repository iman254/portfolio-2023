import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx';
import About from './assets/About.jsx';
import Work from './assets/Work.jsx';
import Not_found_page from './assets/Not-found-page.jsx';
import './_main.scss';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Not_found_page />
  },
  {
    path: '/About',
    element: <About />,
    
  },
  {
    path: '/Work',
    element: <Work />,
    
  }

 ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
