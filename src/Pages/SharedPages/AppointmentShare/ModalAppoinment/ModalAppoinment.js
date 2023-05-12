import { format } from 'date-fns';
import React from 'react';
import { Form } from 'react-router-dom';

const ModalAppoinment = ({ BookTreatment, selectedDate ,setBookTreatment}) => {
    const { name, slots } = BookTreatment;

    const handleInformation = event =>{
        event.preventDefault();
        const form =event.target;
        const date =form.tarik.value;
        const somoy =form.somoy.value;
        const name =form.upady.value;
        const identity =form.identity.value;
        const email =form.email.value;


        const information ={
            date,
            time:somoy,
            name,
            phone:identity,
            email
        }

        console.log(information);

        setBookTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="modal-open" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal-open" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <Form onSubmit={handleInformation} className="grid grid-cols-1 gap-3 mt-5">
                        <input name='tarik' type="text" disabled value={format(selectedDate, "PP")} placeholder="Type here" className="input input-bordered w-full" />
                        <select name='somoy' className="select select-bordered w-full">

                            {
                                slots &&
                                slots.map((slot, i)=> <option
                                key={i} >{slot}</option>)
                            }
                        </select>
                        <input name='upady' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='identity' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />

                        <input className='btn btn-success border-none' type='submit' value="Submite"></input>
                    </Form>

                    <div className="modal-action">
                        <label htmlFor="modal-open" className="btn">ok</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAppoinment;