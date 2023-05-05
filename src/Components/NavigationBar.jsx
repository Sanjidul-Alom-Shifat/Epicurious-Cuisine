import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import logo from '../assets/ec-low-resolution-color-logo.png'

const NavigationBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, LogOutUser } = useContext(AuthContext);
    // console.log(user)
    // const { displayName, photoURL } = user;

    // for log out user
    const HandleLogOut = () => {
        LogOutUser()
            .then(() => {
                // Sign-out successful.
                toast.success('Log Out Successfully');
            })
            .catch((error) => {
                // An error happened.
                toast.error(error.message);
            });
    };

    return (
        <div className=' py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-around'>
                <Link
                    to='/'
                    aria-label='EpicuriousCuisine'
                    title='EpicuriousCuisine'
                    className='inline-flex items-center'
                >
                    <div className='flex items-center justify-center  rounded-full '>
                        <img src={logo} alt="" className='w-12 h-12 rounded-full' />
                    </div>

                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
                        Epicurious Cuisine
                    </span>
                </Link>
                <ul className='items-center hidden text-lg space-x-10 lg:flex'>
                    <li className=''>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='Blog'
                            title='Blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>

                <div className='hidden space-x-8 lg:flex items-center'>
                    {
                        user &&
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    title={user.displayName}
                                    className="avatar-img"
                                />
                            </div>
                        </label>
                    }
                    {
                        user ?
                            <button onClick={HandleLogOut} className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                Log Out
                            </button>
                            :
                            <Link to='/login'>
                                <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                    Login
                                </button>
                            </Link>
                    }
                </div>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='EpicuriousCuisine'
                                            title='EpicuriousCuisine'
                                            className='inline-flex items-center'
                                        >
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200'>
                                                <img src={logo} alt="" className='w-12 h-9 rounded-full' />
                                            </div>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Epicurious
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/'
                                                aria-label='Home'
                                                title='Home'
                                                className='font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                aria-label='Blog'
                                                title='Blog'
                                                className='font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>

                                        <li>
                                            {
                                                user &&
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.photoURL} />
                                                    </div>
                                                </label>
                                            }
                                        </li>
                                        <li>
                                            {
                                                user ?
                                                    <button onClick={HandleLogOut} className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                                        Log Out
                                                    </button>
                                                    :
                                                    <Link to='/login'>
                                                        <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                                            Login
                                                        </button>
                                                    </Link>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;