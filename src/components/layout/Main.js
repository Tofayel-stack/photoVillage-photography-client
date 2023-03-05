import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;