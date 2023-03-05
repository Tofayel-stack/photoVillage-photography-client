import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About/About';
import Service from '../pages/Service';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact/Contact';
import Plans from '../pages/plans/Plans';


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
                    path:'/service',
                   element:<Service></Service>
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

        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;