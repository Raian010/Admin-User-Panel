import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Register/Register';
import Class from './Pages/Home/Class/Class';
import Gallery from './Pages/Gallery/Gallery/Gallery';
import Trainer from './Pages/Trainer/Trainer/Trainer';
import Details from './Pages/Trainer/Details/Details';
import TrainerForm from './Pages/Trainer/TrainerForm/TrainerForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/classes",
        element: <Class></Class>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch(`/trainers2.json`)
      },
      {
        path: "/form",
        element: <TrainerForm></TrainerForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <HelmetProvider>
     <RouterProvider router={router}></RouterProvider>
     </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
