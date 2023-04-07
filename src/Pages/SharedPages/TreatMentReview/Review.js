import React from 'react';

const Review = ({ reviews }) => {

    const { img, name, description, location} = reviews;

    return (
        <div className='m-3'>
            <div className="card shadow-xl">

                <div className="card-body items-center">

                    <p>{description}</p>
                </div>

                <div className='flex mb-5'>
                    <figure className="px-5">
                        <img src={img} alt="" className="rounded-xl h-10" />
                    </figure>
                    <div>
                        <h2 className="">{name}</h2>
                        <h4>{location}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;