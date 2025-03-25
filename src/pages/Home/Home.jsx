import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header'
import OurPartner from '../../components/CommonComponent/OurPartner';
import Frustration from '../../components/CommonComponent/Frustration';
import Solution from '../../components/PerfectSolution/Solution';
import Branding from '../../components/ReasonBranding/Branding';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import Blogs from '../../components/Blogs/Blogs';
import Testimonial from '../../components/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
          <Header/> 
          <Banner/>
         <OurPartner/>
        <Frustration/> 
        <Solution/>
        <Branding/>
        <CaseStudies/>
        <Blogs/>
        <Testimonial/>
        </div>
    );
};

export default Home;