import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import RecipiesLayout from "../Layout/RecipiesLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Recipies from "../pages/Recipies/Recipies";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Shared/Home/Home";
import LoginPage from "../pages/Shared/Login/LoginPage";
import Register from "../pages/Shared/Register/Register";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'about',
                element:<About></About>
            }
        ],
    },
    {
        path:'recipies',
        element:<RecipiesLayout></RecipiesLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><Recipies></Recipies></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allchef/${params.id}`) 
            }
        ]
    }
  ])

  export default router;