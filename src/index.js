import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LandingLayOut from './Pages/LandingLayOut/LandingLayOut';
import HomePage from './Pages/HomePage/HomePage';
import AboutUSPage from './Pages/AboutUsPage/AboutUSPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import LoginCustmerPage from './Pages/LoginCustmerPage/LoginCustmerPage';
import JoinUs from './Pages/JoinUsPage/JoinUs';



const router =createBrowserRouter([
  {
    path:"/",element:<LandingLayOut></LandingLayOut>
    ,
    children:[
      {
        index:true,element:<HomePage></HomePage>
      }
      ,
      {
        path:"/Home" ,element:<HomePage></HomePage>
      }
      ,
      {
        path:"/AboutUs" ,element:<AboutUSPage></AboutUSPage>
      }
      ,
      {
        path:"/ContactUs" ,element:<ContactUsPage></ContactUsPage>
      }
      ,
      {
        path:"/JoinUs" ,element:<JoinUs></JoinUs>
      }
      ,
      {
        path:"/Login" ,element:<LoginCustmerPage></LoginCustmerPage>
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
