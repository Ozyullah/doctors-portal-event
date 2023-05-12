import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableOptions from '../AvailableOptions/AvailableOptions';
import ModalAppoinment from '../ModalAppoinment/ModalAppoinment';

const AppointmentAvailable = ({ selectedDate }) => {

    const [AvailableSlots, setAvailableSlots] = useState([]);
    const [BookTreatment, setBookTreatment] = useState(null)

    useEffect(() => {
        fetch('availableServices.json')
            .then(res => res.json())
            .then(data => setAvailableSlots(data))
    }, [])
    return (
        <section>
            <div className='mt-10'>
                <p className='text-center text-teal-500 text-xl font-semibold'>Available Services on {format(selectedDate, 'PP')}</p>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 p-5'>
                    {
                        AvailableSlots.map(option => <AvailableOptions
                            key={option._id}
                            option={option}
                            setBookTreatment={setBookTreatment}
                        ></AvailableOptions>)
                    }
                </div>

                {
                    BookTreatment &&
                    <ModalAppoinment
                        BookTreatment={BookTreatment}
                        selectedDate={selectedDate}
                        setBookTreatment={setBookTreatment}
                    ></ModalAppoinment>
                }
            </div>
        </section>
    );
};

export default AppointmentAvailable;