import React from 'react';
import Banner from '../../SharedPages/Banner/Banner';
import Services from '../../SharedPages/Services/Services';
import Reviews from '../../SharedPages/TreatMentReview/Reviews';
import Contacts from '../../SharedPages/Contacts/Contacts';
import Cardes from '../../SharedPages/Carde/Cardes';
import CardAppoinment from '../../SharedPages/CardAppoinment/CardAppoinment';


const Home = () => {
    return (
        <div >
            <div className='p-5'>
                <Banner></Banner>
                <Cardes></Cardes>
                <Services></Services>
            </div>
            <CardAppoinment></CardAppoinment>
            <div className='p-5'>
                <Reviews></Reviews>
            </div>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;