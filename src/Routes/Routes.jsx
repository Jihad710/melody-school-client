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
import Classes from "../Pages/Classes/Classes";
import AddAClass from "../Pages/DashBoard/AddAClass/AddAClass";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import InstructorRoutes from "./InstructorRoutes";
import ManageUsers from "../Pages/DashBoard/ManageUser/ManageUser";

import StudentRoute from "./StudentRoute";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";



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
                path : 'classes',
                element: <Classes></Classes>
                
            }
        ],

        
    },
    {
        path:"dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'home',
                element:<UserHome></UserHome>
              },
            {
                path:'userhome',
                element:<StudentRoute><UserHome></UserHome></StudentRoute>
              },
            {
                path:'manageusers',
                element:<ManageUsers></ManageUsers>
              },
            {
                path:'selectedclasses',
                element:<MySelectedClasses></MySelectedClasses>
            },
            {
                path:'enrolledclasses',
                element:<MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path:'addaclass',
                element:<AddAClass></AddAClass>
            },
            {
                path:'myclasses',
                element:<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            {
                path:'manageClasses',
                element:<ManageClasses></ManageClasses>
            }
        ]
    }
]);