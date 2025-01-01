import React, { useState, useEffect, useRef } from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast'

function Navbar() {
    const [language, setLanguage] = useState('English'); // Default language
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
    const dropdownRef = useRef(null); // Ref for the dropdown

    const user = useSelector((store) => store.app.user);
    // console.log('User in Navbar:', user);

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsDropdownOpen(false); // Close dropdown after selecting a language
    };

    // logout functionality
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if (res.data.success) {
                toast.success(res.data.message)
            }
            dispatch(setUser(null));
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-gradient-to-b from-black absolute z-10 w-full">
            <div className="flex justify-between items-center w-full py-6 px-6 md:px-0 max-w-[1260px] mx-auto">
                <img src="netflix.svg" className="w-24 md:w-36" alt="Netflix logo" />
                {
                    !user && (

                        <div className="relative flex items-center gap-4">
                            {/* Language Selector */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    className="px-2 py-1 w-auto md:w-36 bg-transparent text-white rounded focus:outline-none flex items-center font-semibold gap-2 border border-gray-400"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <IoLanguageSharp />
                                    <span className="hidden md:inline">{language}</span>
                                    <span className="ml-2">&#9662;</span> {/* Downward arrow */}
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-20">
                                        <button
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={() => handleLanguageChange('English')}
                                        >
                                            English
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={() => handleLanguageChange('हिन्दी')}
                                        >
                                            हिन्दी
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sign Up Button */}
                            <Link
                                to="/login"
                                className="bg-[#e50914] hover:bg-red-700 duration-300 text-white font-semibold px-4 py-1 md:px-2 md:py-1 rounded"
                            >
                                Sign in
                            </Link>
                        </div>
                    )
                }

                {user && ( // Only render the language and Sign Up button if the user is logged in
                    <div className="relative flex items-center gap-4">
                        <div className='border border-gray-400 max-w-56 px-1 py-1 rounded text-white flex justify-between items-center gap-6'>{user.fullName}<FaCaretDown />
                        </div>

                        {/* Sign Up Button */}
                        <Link
                            to="/login"
                            className="bg-[#e50914] hover:bg-red-700 duration-300 text-white font-semibold px-4 py-1 md:px-2 md:py-1 rounded" onClick={logoutHandler}
                        >
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
