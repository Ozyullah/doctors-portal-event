import { GoogleMap, Marker } from '@react-google-maps/api';
import React from 'react';

const MapLocation = ({ selectedLocation }) => {

    const mapContainerStyle ={
        width: '100%',
        height: '400px',
    };

    const center ={
        let: selectedLocation.let,
        lng: selectedLocation.lng,
    };

    return (
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        >
            <Marker position={center}></Marker>
        </GoogleMap>
    );
};

export default MapLocation;