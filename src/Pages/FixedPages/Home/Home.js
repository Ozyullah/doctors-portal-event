import React from 'react';
import Banner from '../../SharedPages/Banner/Banner';
import Services from '../../SharedPages/Services/Services';
import Appoinment from '../../SharedPages/Appoinment/Appoinment';
import Reviews from '../../SharedPages/TreatMentReview/Reviews';
import Contacts from '../../SharedPages/Contacts/Contacts';
import Cardes from '../../SharedPages/Carde/Cardes';


const Home = () => {
    return (
        <div >
            <div className='p-5'>
                <Banner></Banner>
                <Cardes></Cardes>
                <Services></Services>
            </div>
            <Appoinment></Appoinment>
            <div className='p-5'>
                <Reviews></Reviews>
            </div>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;