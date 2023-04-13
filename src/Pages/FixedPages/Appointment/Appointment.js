import React, { useState } from 'react';
import AppointmentBanner from '../../SharedPages/AppointmentShare/AppointmentBanner/AppointmentBanner';
import AppointmentAvailable from '../../SharedPages/AppointmentShare/AppointmentAvailable/AppointmentAvailable';

const Appointment = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentAvailable
            selectedDate={selectedDate}
           
            ></AppointmentAvailable>
        </div>
    );
};

export default Appointment;