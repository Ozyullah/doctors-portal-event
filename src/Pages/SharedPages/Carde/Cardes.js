import React from 'react';
import Carde from './Carde';
import clock from '../../../assets/Icon/clock.svg';
import locat from '../../../assets/Icon/marker.svg';
import phone from '../../../assets/Icon/phone.svg';

const Cardes = () => {

    const cardInfo =[
        {
            id:1,
            name:"Opening Hours",
            description:"Lorem Ipsum is simply dummy text of the pri",
            bgColor:"bg-gradient-to-r from-teal-400 to-sky-400",
            imge:`${clock}`
        },
        {
            id:2,
            name:"Visit our location",
            description:"Brooklyn, NY 10036, United States",
            bgColor:"bg-slate-700",
            imge:`${locat}`
        },
        {
            id:3,
            name:"Contact us now",
            description:"+000 123 456789",
            bgColor:"bg-gradient-to-r from-teal-400 to-sky-400",
            imge:`${phone}`
        }
]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                cardInfo.map(infoe =><Carde
                key={infoe.id}
                info={infoe}
                ></Carde>)
            }
        </div>
    );
};

export default Cardes;