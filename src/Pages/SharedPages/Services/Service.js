import React from 'react';

const Service = ({stead}) => {

    const {name, img, description, }=stead;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;