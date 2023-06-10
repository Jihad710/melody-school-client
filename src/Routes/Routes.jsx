import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import DashBoard from "../Layout/DashBoard";
import MySelectedClasses from "../Pages/DashBoard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/DashBoard/MyEnrolledClasses/MyEnrolledClasses";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element: <Home></Home>
                
            },
            {
                path : 'login',
                element: <Login></Login>
                
            },
            {
                path : 'signup',
                element: <SignUp></SignUp>
                
            },
            {
                path : 'instructors',
                element: <Instructor></Instructor>
                
            },
            {
                path : 'dashboard',
                element: <DashBoard></DashBoard>
                
            }
        ],

        
    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children: [
            {
                path:'selectedclasses',
                element:<MySelectedClasses></MySelectedClasses>
            },
            {
                path:'enrolledclasses',
                element:<MyEnrolledClasses></MyEnrolledClasses>
            }
        ]
    }
]);