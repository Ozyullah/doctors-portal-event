import React from 'react';
import chair from '../../../assets/chair.png';
import bgi from '../../../assets/bg.png';

const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage: `url(${bgi})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-semibold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-none btn-primary bg-gradient-to-r from-teal-400 to-sky-400">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;