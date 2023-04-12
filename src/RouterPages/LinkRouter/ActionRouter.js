import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/FixedPages/Home/Home";
import Appointment from "../../Pages/FixedPages/Appointment/Appointment";



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
        }
    ]
}
])