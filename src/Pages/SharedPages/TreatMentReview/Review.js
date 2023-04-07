import React from 'react';

const Review = ({ reviews }) => {

    const { img, name, description, } = reviews;

    return (
        <div className='m-3'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions">
          <button className="btn btn-info btn-outline btn-sm">Book Now</button>
        </div> */}
                </div>
            </div>
        </div>
    );
};

export default Review;