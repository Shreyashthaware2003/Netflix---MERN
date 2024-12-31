import React, { useState } from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const [language, setLanguage] = useState('English'); // Default language
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsDropdownOpen(false); // Close dropdown after selecting a language
    };

    return (
        <>
            <div className='bg-gradient-to-b from-black absolute z-10 w-full'>
                <div className="flex justify-between items-center w-full py-6 px-6 md:px-0 max-w-[1260px] mx-auto">
                    <img src="netflix.svg" className="w-24 md:w-36" alt="Netflix logo" />
                    <div className="relative flex justify-center items-center gap-4">
                        <div className=''>

                            {/* Current selected language button */}
                            <button
                                className="px-2 py-1 w-auto md:w-36 bg-transparent text-white rounded focus:outline-none flex justify-center items-center font-semibold gap-2 border border-gray-400"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            ><IoLanguageSharp />
                                <span className='hidden md:inline '>{language}</span>
                                <span className="ml-2">&#9662;</span> {/* Downward arrow */}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute  mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg">
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
                        <Link to={'/login'} className='bg-[#e50914] hover:bg-red-700 duration-300 text-white font-semibold px-4 py-1 md:px-2 md:py-1 rounded'>Sign In</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
