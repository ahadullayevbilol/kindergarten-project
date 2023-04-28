import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import AboutPage from './pages/AboutPage';
  import Contact from './pages/Contact';
  import Images from './pages/Images';
  import Groups from './pages/Groups';
  import TeachersPage from './pages/TeachersPage';

  const route = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/images",
        element: <Images />
    },
    {
        path: "/groups",
        element: <Groups />
    },
    {
        path: "/teachers",
        element: <TeachersPage />
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={route} />
);