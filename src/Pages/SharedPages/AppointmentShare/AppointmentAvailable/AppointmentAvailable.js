import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableOptions from '../AvailableOptions/AvailableOptions';

const AppointmentAvailable = ({ selectedDate }) => {

    const [AvailableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        fetch('availableServices.json')
            .then(res => res.json())
            .then(data => setAvailableSlots(data))
    }, [])
    return (
        <section>
            <div className='mt-10'>
                <p className='text-center text-teal-500 text-xl font-semibold'>Available Services on {format(selectedDate, 'PP')}</p>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                    {
                        AvailableSlots.map(option => <AvailableOptions
                            key={option.id}
                            option={option}
                        ></AvailableOptions>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AppointmentAvailable;