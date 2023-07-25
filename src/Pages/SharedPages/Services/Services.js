import React from 'react';
import teath from '../../../assets/fluoride.png';
import cavity from '../../../assets/cavity.png';
import whitening from '../../../assets/whitening.png';
import treatment from '../../../assets/treatment.png';
import Service from './Service';


const Services = () => {

    const steads=[
        {
            id:1,
            name:"Fluoride Treatment",
            description:"If a dog chews shoes whose shoes does he choose?",
            img:`${teath}`
        },
        {
            id:2,
            name:"Cavity Filling",
            description:"If a dog chews shoes whose shoes does he choose?",
            img:`${cavity}`
        },
        {
            id:3,
            name:"Teeth Whitening",
            description:"If a dog chews shoes whose shoes does he choose?",
            img:`${whitening}`
        }
    ]
    return (
        <div className=' mt-36'>
            <div className='text-center '>
                <h2 className='font-semibold text-xl text-teal-400'>OUR SERVICES</h2>
                <h3 className=' text-3xl font-sans'>Services We Provide</h3>
            </div>
            <div className='lg:flex grid gap-4 mt-8 grid-cols-1'>

                {
                    steads.map(stead =><Service
                    key={stead.id}
                    stead={stead}
                    ></Service>)
                }
                
            </div>

            <div className='p-14 mt-10'>
                <div className="card lg:flex grid sm:grid-cols-1 card-side bg-base-100">
                    <figure><img className='lg:w-[1400px] lg:h-[376px]' src={treatment} alt="" /></figure>

                    <div className="card-body lg:p-14">
                        <h2 className="card-title font-extrabold">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions justify-start">
                            <button className="btn border-none bg-gradient-to-r from-teal-400 to-sky-400">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;