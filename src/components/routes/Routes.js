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
                   loader:()=>fetch('http://localhost:5000/services')

                },
                {
                    path:'/servDetails/:id',
                   element:<ServiceDetails></ServiceDetails>,
                   loader:({params})=>fetch(`http://localhost:5000/servDetails/${params.id}`)
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
                   element:<Contact></Contact>
                },
           
            ]

        },


        {
            path:'*',
            element:<div>hi . this is 404 !!!</div>
        },



    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;