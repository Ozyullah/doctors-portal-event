import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("")
    console.log(data)
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='bg-white p-7 rounded-lg shadow-inner shadow-slate-600'>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className='grid gap-5 '>
                    <h2 className='text-center font-semibold'>Sign Up</h2>
                    {/* Name Section */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Enter your Full name" className="input input-bordered w-full max-w-xs" />

                    </div>
                    {/* Photo section */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input {...register("photoe", { required: true })} type="file" placeholder="Please Enter your image" className="input input-bordered w-full max-w-xs" />

                    </div>

                    {/* Email section */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="Email" placeholder="Please Enter your email address" className="input input-bordered w-full max-w-xs" />

                    </div>
                    {/* Password section */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" placeholder="Please Enter Password" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <input type="submit" className='btn btn-success' />
                </form>

                <div className='mt-3'>
                    <h3>have an account? <Link to={"/login"} className='text-blue-500'>Login now</Link></h3>
                    <div className='divider'>OR</div>

                    <button type="submit" className='btn w-full'>CONTINUE WITH GOOGLE</button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;