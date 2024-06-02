import { Routes, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Users from "../Pages/Users";
import Error from "../Pages/Error";
import Layout from "../Layouts/Layout";

export const router=createBrowserRouter([
    {element:<Layout></Layout>,
    children:[{
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/Login",
        element: <Login></Login>
    },
    {
        path: "/Register",
        element: <Register></Register>
    },
    {
        path: "/Users",
        element: <Users></Users>
    },
    {
        path: "/*",
        element: <Error></Error>
    }]
},
    
])