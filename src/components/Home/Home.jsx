import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header'
import OurPartner from '../CommonComponent/OurPartner';
import Frustration from '../Frustration';

const Home = () => {
    return (
        <div>
         <Header/>
        <Banner/>
        <OurPartner/>
        <Frustration/>
        </div>
    );
};

export default Home;