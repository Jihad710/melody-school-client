import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";


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
                path : 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
                
            }
        ]
        
    }
]);