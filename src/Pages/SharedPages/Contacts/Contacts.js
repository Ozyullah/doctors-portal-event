import React from 'react';
import backgroundImg from '../../../assets/appointment.png';

const Contacts = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h3 className=" text-xs font-semibold text-teal-400">Contact Us</h3>

                    <h1 className=' text-cyan-50'>Stay connected with us</h1>
                    <div className='grid gap-3 mt-5'>

                        {/* email sector */}
                        <div className="indicator">

                            <input type="text" placeholder="Your email address" className="input input-bordered" />
                        </div>

                        {/* subject sector */}
                        <div className="indicator">

                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>

                        {/* massage sector */}
                        <div>
                            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg" ></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-7 bg-gradient-to-r from-teal-400 to-sky-400">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;