import React from 'react';
import clock from '../../../assets/Icon/clock.svg';
import locat from '../../../assets/Icon/marker.svg';
import phone from '../../../assets/Icon/phone.svg';

const Carde = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card lg:card-side bg-gradient-to-r from-teal-400 to-sky-400 shadow-xl p-5">
                <figure><img src={clock} alt="" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
            {/* 2nd section */}
            <div className="card lg:card-side bg-slate-700 shadow-xl p-5">
                <figure><img src={locat} alt="" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
            {/* 3rd section */}
            <div className="card lg:card-side bg-gradient-to-r from-teal-400 to-sky-400 shadow-xl p-5">
                <figure><img src={phone} alt="" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Carde;