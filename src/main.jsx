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
import Gallery from './Pages/Gallery/Gallery/Gallery';
import Trainer from './Pages/Trainer/Trainer/Trainer';
import Details from './Pages/Trainer/Details/Details';
import TrainerForm from './Pages/Trainer/TrainerForm/TrainerForm';
import Packages from './Pages/Trainer/Packages/Packages';
import ErrorPage from './Error/ErrorPage';
import Classes from './Pages/Classes/Classes';
import Forum from './Pages/Forum/Forum/Forum';
import Dashboard from './Layout/Dashboard/Dashboard';
import Subscribers from './Pages/Dashboard/Subscribers';
import Private from './Provider/Private';
import Trainers from './Pages/Dashboard/Trainers';
import Applied from './Pages/Dashboard/Applied';
import Balance from './Pages/Dashboard/Balance';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminRoute from './Provider/AdminRoute';
import Activity from './Pages/Dashboard/User/Activity';
import Profile from './Pages/Dashboard/User/Profile';
import Update from './Pages/Dashboard/User/Update';
import Recommended from './Pages/Dashboard/User/Recommended';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/package/:id',
        element: <Private><Packages></Packages></Private>,
        loader: () => fetch('/trainers2.json')
      },
      {
        path: "/form",
        element: <Private><TrainerForm></TrainerForm></Private>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path: "/forum",
        element: <Forum></Forum>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/subscribe",
        element: <AdminRoute><Subscribers></Subscribers></AdminRoute>
      },
      {
        path: "/dashboard/trainers",
        element: <AdminRoute><Trainers></Trainers></AdminRoute>
      },
      {
        path: "/dashboard/applied",
        element: <AdminRoute><Applied></Applied></AdminRoute>
      },
      {
        path: "/dashboard/balance",
        element: <AdminRoute><Balance></Balance></AdminRoute>
      },
      {
        path: "/dashboard/activity",
        element: <Private><Activity></Activity></Private>
      },
      {
        path: "/dashboard/profile",
        element: <Private><Profile></Profile></Private>
      },
      {
        path: "/dashboard/update",
        element: <Private><Update></Update></Private>
      },
      {
        path: "/dashboard/recommend",
        element: <Private><Recommended></Recommended></Private>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
     <RouterProvider router={router}></RouterProvider>
     </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
