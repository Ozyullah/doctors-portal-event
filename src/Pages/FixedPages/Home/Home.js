import React from 'react';
import Banner from '../../SharedPages/Banner/Banner';
import Carde from '../../SharedPages/Carde/Carde';
import Services from '../../SharedPages/Services/Services';
import Appoinment from '../../SharedPages/Appoinment/Appoinment';
import Reviews from '../../SharedPages/TreatMentReview/Reviews';


const Home = () => {
    return (
        <div >
            <div className='p-5'>
                <Banner></Banner>
                <Carde></Carde>
                <Services></Services>
            </div>
            <Appoinment></Appoinment>
            <div className='p-5'>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;