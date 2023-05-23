import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Shared/Home/Home";
import LoginPage from "../pages/Shared/Login/LoginPage";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
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
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    }
  ])

  export default router;