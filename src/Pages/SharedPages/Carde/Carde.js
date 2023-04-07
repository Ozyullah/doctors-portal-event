import React from 'react';


const Carde = ({info}) => {

    const {name, description, imge, bgColor}=info;
    return (
            <div className={`card lg:card-side shadow-xl p-5 ${bgColor}`}>
                <figure><img src={imge} alt="" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
            // {/* 2nd section */}
            // {/* <div className="card lg:card-side bg-slate-700 shadow-xl p-5">
            //     <figure><img src={locat} alt="" /></figure>
            //     <div className="card-body text-white">
            //         <h2 className="card-title">Opening Hours</h2>
            //         <p>Click the button to watch on Jetflix app.</p>
                    
            //     </div>
            // </div> */}
            // {/* 3rd section */}
            // {/* <div className="card lg:card-side bg-gradient-to-r from-teal-400 to-sky-400 shadow-xl p-5">
            //     <figure><img src={phone} alt="" /></figure>
            //     <div className="card-body text-white">
            //         <h2 className="card-title">Opening Hours</h2>
            //         <p>Click the button to watch on Jetflix app.</p>
                    
            //     </div>
            // </div> */}
        
    );
};

export default Carde;