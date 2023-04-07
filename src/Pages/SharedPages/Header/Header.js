import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>About</Link></li>
        <li><Link to={'/'}>Appointment</Link></li>
        <li><Link to={'/'}>Reviews</Link></li>
        <li><Link to={'/'}>Contact Us</Link></li>
        <li><Link to={'/'}>Login</Link></li>
    </>
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown lg:hidden md:block sm:block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>


            <div className="navbar-end">
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-white-100 shadow">
                            <div className="card-body form-control">
                                <input type="text" placeholder="Search" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a className=''>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;
