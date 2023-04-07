import React from 'react';
import patient from '../../../assets/people1.png';
import Review from './Review';
import comma from '../../../assets/Icon/quote.svg';
import Carousel from 'react-multi-carousel';

const Reviews = () => {

    // carousel sector start
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // carousel sector start

    const patientsReviews = [
        {
            id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "canada",
            img: `${patient}`,
        },
        {
            id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "canada",
            img: `${patient}`,
        },
        {
            id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "canada",
            img: `${patient}`,
        },
        {
            id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "canada",
            img: `${patient}`,
        }
    ]
    return (
        <div className='mt-10 '>
            <div className='flex bg-gray-800'>
                <div>
                    <h3>Testimonial</h3>
                    <h1>What Our Patients Says</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={comma} alt="" className=' w-1/4 ' />
                </div>

            </div>

            {/* carrousel section */}
                <div className=''>

                    <Carousel className='mt-10 w-10/12 m-auto' responsive={responsive}>
                        {
                            patientsReviews.map(review => <Review
                                key={review.id}
                                reviews={review}
                            ></Review>)
                        }
                    </Carousel>
                </div>
            
        </div>
    );
};

export default Reviews;