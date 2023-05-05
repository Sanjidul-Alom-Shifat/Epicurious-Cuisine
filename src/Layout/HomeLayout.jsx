import React from 'react';
import BannerSection from '../Components/BannerSection';
import AboutUs from '../Components/AboutUs';
import Foods from '../Components/Foods';
import CheifsPage from '../Components/CheifsPage';

const HomeLayout = () => {
    return (
        <div>
            
            <BannerSection></BannerSection>

            <CheifsPage></CheifsPage>

            <Foods></Foods>

            <AboutUs></AboutUs>

        </div>
    );
};

export default HomeLayout;