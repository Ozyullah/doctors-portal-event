import React from 'react';
import Banner from '../../SharedPages/Banner/Banner';
import Services from '../../SharedPages/Services/Services';
import Reviews from '../../SharedPages/TreatMentReview/Reviews';
import Contacts from '../../SharedPages/Contacts/Contacts';
import Cardes from '../../SharedPages/Carde/Cardes';
import CardAppoinment from '../../SharedPages/CardAppoinment/CardAppoinment';
import MapLocation from '../../SharedPages/GoogleMap/MapLocation';


const Home = () => {

    // const selectedLocation = {
    //     lat: 37.7749,
    //     lng: -122.4194,
    // };

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
            <div>
                {/* <MapLocation></MapLocation> */}
                {/* <MapLocation selectedLocation={selectedLocation} /> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4509284602946!2d90.34765371210878!3d23.802559086680496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e6a0122193%3A0x8b2fedf6b5356683!2sRd%20Number%205%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1687022127967!5m2!1sen!2sbd" width="100%" height="200" style={{borderRadius:30}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Home;