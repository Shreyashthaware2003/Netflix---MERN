import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from 'react-hot-toast';

const MovieContainer = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);

    const BASE_URL = 'https://api.tvmaze.com'; // TVMaze API base URL

    // Fetch shows data from TVMaze API
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/search/shows`, {
                    params: { q: 'indian' }, // Modify the query as needed
                });

                if (response.status === 200) {
                    setShows(response.data);
                } else {
                    setError('Failed to fetch TV shows');
                }
            } catch (err) {
                console.error('Error fetching TV shows:', err);
                setError('Failed to fetch TV shows');
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, []);

    const totalShows = shows.length;

    const handleNext = () => {
        if (currentIndex + getItemsPerSet() < totalShows) {
            setCurrentIndex(currentIndex + getItemsPerSet());
        }
    };

    const handlePrev = () => {
        if (currentIndex - getItemsPerSet() >= 0) {
            setCurrentIndex(currentIndex - getItemsPerSet());
        }
    };

    // Determine the number of items to show per slide based on screen size
    const getItemsPerSet = () => {
        if (window.innerWidth >= 1024) {
            return 5; // Desktop: 5 items
        } else if (window.innerWidth >= 768) {
            return 4; // Tablet: 4 items
        } else if (window.innerWidth >= 640) {
            return 2; // Small Tablet: 2 items
        } else {
            return 1; // Mobile: 1 item
        }
    };

    // Handle clicking on a show
    const handleClick = (showName) => {
        toast.error(`Failed to play ${showName}!`); // Show a toast message
    };

    return (
        <div className="relative flex flex-col justify-center items-center px-4 md:px-20 lg:px-44 py-10 md:py-20 bg-gradient-to-br from-black to bg-[#ff000d]">
            <h1 className="text-4xl font-bold mb-10 text-white tracking-wide md:text-start md:w-full">TV Shows</h1>

            {loading && <p>Loading shows...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Movie Slider */}
            <div className="relative w-56 md:w-full overflow-hidden">
                <div
                    className="flex justify-center items-center transition-transform duration-700 ease-in-out bg-gradient-to-tr from-black md:p-4 gap-6 rounded-3xl w-full text-white border-4 border-[#919090] shadow"
                    style={{
                        transform: `translateX(-${(currentIndex / getItemsPerSet()) * 0}%)`, // Adjust transition smoothly
                    }}
                >
                    {shows.slice(currentIndex, currentIndex + getItemsPerSet()).map((item) => (
                        <div
                            key={item.show.id}
                            className="w-full sm:w-[48%] md:w-[22%] lg:w-[18%] xl:w-[16%] min-w-[200px] flex flex-col justify-center items-center p-4 md:p-2 hover:scale-105 cursor-pointer duration-300 "
                            onClick={() => handleClick(item.show.name)}
                        >
                            <img
                                src={item.show.image?.medium || 'https://via.placeholder.com/200x300?text=No+Image'}
                                alt={item.show.name}
                                className="w-56 md:w-96 rounded-lg"
                            />
                            <h3 className="text-base font-semibold mt-2">{item.show.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel Controls */}
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-5 md:left-20 top-1/2 transform -translate-y-1/2 bg-white opacity-60 p-2 rounded-md hover:bg-gray-700 focus:outline-none hover:opacity-60 h-32 text-black hover:text-white cursor-pointer "
            >
                <IoIosArrowBack />
            </button>
            <button
                onClick={handleNext}
                disabled={currentIndex + getItemsPerSet() >= totalShows}
                className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 bg-white opacity-60 p-2 rounded-md hover:bg-gray-700 focus:outline-none hover:opacity-60 h-32 text-black hover:text-white "
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default MovieContainer;
