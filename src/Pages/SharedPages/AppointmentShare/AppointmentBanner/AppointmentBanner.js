import React, { useState } from 'react';
import chair from '../../../../assets/chair.png';
import backgroundi from '../../../../assets/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero" style={{backgroundImage:`url(${backgroundi})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-5'>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                    
                    </div>
                </div>
                
            </div>

        </header>
    );
};

export default AppointmentBanner;