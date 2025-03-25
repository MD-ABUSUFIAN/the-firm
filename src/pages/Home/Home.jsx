import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header'
import OurPartner from '../../components/CommonComponent/OurPartner';
import Frustration from '../../components/CommonComponent/Frustration';
import Solution from '../../components/PerfectSolution/Solution';
import Branding from '../../components/ReasonBranding/Branding';


const Home = () => {
    return (
        <div>
          <Header/> 
          <Banner/>
         <OurPartner/>
        <Frustration/> 
        <Solution/>
        <Branding/>
        </div>
    );
};

export default Home;