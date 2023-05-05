import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            
            <NavigationBar></NavigationBar>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;