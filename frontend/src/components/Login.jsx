import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-screen">
                {/* Background image */}
                <img
                    src="netflix-bg.jpg"
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/* Black overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* Content over the black layer */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
                    <div className='flex flex-col bg-[#000000b3] py-4 px-14 max-w-[400px]'>
                        <h1 className='text-4xl font-bold py-6'>Sign In</h1>
                        <div className='flex flex-col justify-center gap-4'>
                            <input type="email" className='py-3 px-3 bg-transparent border border-gray-400 rounded' placeholder='Email or mobile number' />
                            <input type="password" className='py-3 px-3 bg-transparent border border-gray-400 rounded' placeholder='Password' />
                            <button className='w-full bg-[#e50914] hover:bg-red-700 duration-300 py-2 rounded font-semibold'>Sign In</button>
                        </div>
                        <div className='py-6 flex flex-col flex-nowrap gap-4'>
                            <div className='flex flex-row flex-nowrap gap-1'>
                                <span className='text-gray-400'>New to Netflix?</span><Link to={'#'} className='hover:underline font-semibold'>Sign up now.</Link>
                            </div>
                            <p className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
