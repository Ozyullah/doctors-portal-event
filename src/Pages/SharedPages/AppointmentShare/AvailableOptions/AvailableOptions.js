import React from 'react';

const AvailableOptions = ({ option }) => {

    const { name, slots } = option;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-xl text-teal-400 font-semibold">{name}</h2>
                    <p>{ slots.length > 0 ? slots[0] : "Please try another date"}</p>

                    <p>{slots.length} {slots.length > 1 ? 'Slots' : 'Slot'} Available</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-teal-400 border-none">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableOptions;