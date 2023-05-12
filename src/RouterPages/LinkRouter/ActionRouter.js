import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/FixedPages/Home/Home";
import Appointment from "../../Pages/FixedPages/Appointment/Appointment";
import Login from "../../Pages/FixedPages/AuthenticationPages/Login/Login";
import SignUp from "../../Pages/FixedPages/AuthenticationPages/SignUp/SignUp";



export const router =createBrowserRouter([
{
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/appoinment",
            element:<Appointment></Appointment>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/signup",
            element:<SignUp></SignUp>
        }
    ]
}
])