import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import BlogPage from "../Components/BlogPage";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import BannerSection from "../Components/BannerSection";
import HomeLayout from "../Layout/HomeLayout";
import ChefRecipes from "../Components/ChefRecipes";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<HomeLayout></HomeLayout>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/register',
                element: <RegisterForm></RegisterForm>
            },
            {
                path: '/cheifs/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader:({params})=>fetch(`https://epicurious-server-side-sanjidul-alom-shifat.vercel.app/cheifs/${params.id}`)
            }
        ]
    },
    
])

export default router;