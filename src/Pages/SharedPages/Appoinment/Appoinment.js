import React from 'react';
import doctor from '../../../assets/doctor-small.png';
import bgapoinment from '../../../assets/appointment.png';

const Appoinment = () => {
    return (
        <section className=' mt-16'>
            <div className="hero bg-base-200" style={{backgroundImage:`url(${bgapoinment})`}}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-32 lg:w-1/2 rounded-lg shadow-sm hidden lg:block" />
                    <div className=''>
                        <h4 className='text-xl font-semibold text-teal-400'>Appointment</h4>
                        <h1 className="text-5xl font-bold text-cyan-50">Make an appointment Today</h1>
                        <p className="py-6 text-cyan-50">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn bg-gradient-to-r from-teal-400 to-sky-400">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;