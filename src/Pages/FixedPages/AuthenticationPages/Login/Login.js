import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../ContextPages/ContextPages';
import { GoogleAuthProvider } from 'firebase/auth';


const provider = new GoogleAuthProvider();
const Login = () => {

    const {userSignInWithPassword, signInWithGoogle, emailVerification}=useContext(AuthContext)

    const googleSignIn =()=>{
        signInWithGoogle(provider)
        .then((result)=>{
            const credential =GoogleAuthProvider.credentialFromResult(result);
            emailVerification();
            console.log(credential)
        })
    }

    const userSignInMethod=(data)=>{
        console.log(data)
        userSignInWithPassword(data.email, data.password)
        .then((result)=>{
            const user =result.user;
        })
        .catch(()=>{

        })
    }
    const { register, handleSubmit } = useForm();
    // const [data, setData] = useState("")
    // console.log(data)
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='bg-white p-7 rounded-lg shadow-inner shadow-slate-600'>
                <form onSubmit={handleSubmit(userSignInMethod)} className='grid gap-5'>
                    <h2 className='text-center font-semibold'>Login</h2>
                        {/* Email section  */}
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
                    <h3>New to doctors Portal? <Link to={"/signup"} className=' text-blue-500'>Create a new account</Link></h3>

                    <div className='divider'>OR</div>

                    <button onClick={googleSignIn} className='btn w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Login;