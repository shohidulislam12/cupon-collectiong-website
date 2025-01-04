import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPAge from './Components/Main/MainPAge.jsx';
import Error from './Components/Error/Error.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Login/Register.jsx';
import Banner from './Components/Main/Banner.jsx';
import TopBrands from './Components/Main/TopBrands.jsx';
import Brands from './Components/Brands/Brands.jsx';
import Details from './Components/Details/Details.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Privet from './Components/PrivetRoute/Privet.jsx';
import MyProfile from './Components/MyProfile/MyProfile.jsx';
import UpdateProfile from './Components/MyProfile/UpdateProfile.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgatePassword from './Components/Login/ForgatePassword.jsx';
import AboutUs from './Components/Main/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainPAge></MainPAge>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
    element:<Banner></Banner>,
    loader:()=>fetch("/Coupon.json")
      },
      {
        path: "brands",
    element:<Brands></Brands>,
    loader:()=>fetch("/Coupon.json")
      },
      {
        path: "myProfile",
    element:<Privet>
      <MyProfile></MyProfile>
    </Privet>
      },
      {
        path: "user/updateProfile",
    element:<Privet>
     <UpdateProfile></UpdateProfile>
    </Privet>
      },
      {
        path: "brands/details/:id",
    element:<Privet>
      <Details></Details>,
    </Privet>,
    loader:({params})=>fetch("/Coupon.json")
      },

      {
        path: "/login",
    element: <Login></Login>
      },
      {
        path: "/about",
    element:<AboutUs></AboutUs>
      },
      {
        path: "/forget",
    element:<ForgatePassword></ForgatePassword>
      },
      {
        path: "/register",
    element: <Register></Register>
      },
    ]
   
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <ToastContainer />
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
