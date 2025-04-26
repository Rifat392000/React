import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, HomeLayout } from "../layouts";
import { Errorpage, Login, Register, ForPass, UpdateProfile, Category, DonationDetails } from "../pages";
import AuthLogSt from "./AuthLogSt";
import PrivateRoute from "./PrivateRoute";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        element: <Category></Category>,
        loader: () =>
          fetch("/donation_campaigns.json").then(res => res.json()),
      },
      
    ],
  },

  {
    path: "/auth",
    element: <AuthLogSt />, // ✅ block if logged in
    children: [
      {
        element: <AuthLayout />, // ✅ layout for all auth pages
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "forgot-password",
            element: <ForPass />,
          },
        ],
      },
    ],
  },
  // Register route as a separate entry, not nested under AuthLogSt
  {
    path: "/auth/register",
    element: <Register />,
  },


  {
    path: "/donation/:id",
    element: (
      <PrivateRoute>
        <DonationDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch("/donation_campaigns.json")
        .then(res => res.json())
        .then(data => data.find(val => val.id === Number(params.id))),
    
  },

  {

    path: "/update",
    element: (
      <PrivateRoute><UpdateProfile/></PrivateRoute>
    ),

  },
  

  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },

]);

export default publicRouter