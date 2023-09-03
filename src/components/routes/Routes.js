import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About/About';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/Contact/Contact';
import Plans from '../pages/plans/Plans';
import Services from '../pages/services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/registresion/SignUp';
import Error404 from '../component/Error404/Error404';
import MyReview from '../pages/myReview/MyReview';
import PrivateRoute from './PrivateRoute';


const Routes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                   
                {
                    path:'/signIn',
                    element:<SignIn></SignIn>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                },

              
                {
                    path:'/service',
                   element:<Services></Services>,
                   loader:()=>fetch('https://photo-grapher-server.vercel.app/services')

                },
                {
                    path:'/servDetails/:id',
                   element:<ServiceDetails></ServiceDetails>,
                   loader:({params})=>fetch(`https://photo-grapher-server.vercel.app/servDetails/${params.id}`)
                },
              
                {
                    path:'/myreview',
                    element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
                    
                },
              
                {
                    path:'/blog',
                   element:<Blog></Blog>
                },
                {
                    path:'/about',
                   element:<About></About>
                },
                {
                    path:'/plans',
                   element:<Plans></Plans>
                },
                {
                    path:'/contact',
                   element:<PrivateRoute><Contact></Contact></PrivateRoute>
                },
           
            ]

        },


        {
            path:'*',
            element:<Error404></Error404>
        },



    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;