import { React, useEffect, useState } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieConatiner from './MovieConatiner';

function Register() {
    const [active, setActive] = useState(null);

    const faqs = [
        { question: "What is Netflix?", answer: "Netflix is a streaming service that offers..." },
        { question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone..." },
        { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in..." },
        { question: "How do I cancel?", answer: "Netflix is flexible. There are no annoying..." },
        { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of..." },
        { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included..." },
    ];

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    const navigate = useNavigate();
    const user = useSelector(store => store.app.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Main Content */}
                <div className="flex-grow">
                    <Navbar />
                    {
                        !user && (
                            <>
                                {/* Hero Section */}
                                <div className="relative w-full h-screen">
                                    <img
                                        src="netflix-bg.jpg"
                                        alt=""
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-tr from-[#0a0a0ae6] px-4">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full sm:w-3/4 lg:w-1/2 text-center leading-snug sm:leading-normal md:leading-relaxed py-6">
                                            Unlimited movies, TV shows and more
                                        </h1>
                                        <p className="text-gray-200 text-sm sm:text-base lg:text-lg text-center px-2">
                                            Ready to watch? Enter your email to create or restart your membership.
                                        </p>
                                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 w-full">
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                className="w-80 sm:w-96 bg-transparent px-4 py-3 border border-gray-300 font-semibold text-sm sm:text-base rounded-md"
                                            />
                                            <button className="px-6 sm:px-8 py-3 bg-[#e50914] hover:bg-red-700 duration-300 text-base sm:text-xl font-bold rounded flex justify-center items-center gap-4 sm:w-auto">
                                                Get Started <IoIosArrowForward />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <section className="flex flex-col justify-center items-center py-10 bg-black text-white w-full px-4">
                                    <h2 className="text-xl md:text-3xl text-center font-bold mb-6">
                                        Frequently Asked Questions
                                    </h2>
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="faq-box cursor-pointer mb-2 w-full flex flex-col justify-center items-center"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <div className="flex justify-between items-center w-full md:w-[1200px] hover:bg-[#373737] bg-[#2d2d2d] py-6 px-4">
                                                <span className="text-xl font-semibold">{faq.question}</span>
                                                <svg
                                                    className={`transition-transform transform ${active === index ? 'rotate-45' : ''}`}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 4V20" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                                    <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            {active === index && (
                                                <div className="mt-[2px] text-xl text-start px-4 py-4 w-full md:w-[1200px] hover:bg-[#373737] bg-[#2d2d2d]">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    <div className="sec-email mt-10 text-center">
                                        <span className="text-lg">
                                            Ready to watch? Enter your email to create or restart your membership.
                                        </span>
                                        <div className="sec-email-btn mt-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
                                            <input
                                                type="text"
                                                placeholder="Email address"
                                                className="p-3 w-80 sm:w-[500px] bg-transparent border border-gray-300 rounded-md"
                                            />
                                            <div className="flex justify-start md:justify-center items-center w-full md:w-auto">
                                                <button className="sec-email-start-btn ml-4 px-6 py-3 bg-red-600 hover:bg-red-700 duration-300 text-white text-lg font-bold rounded">
                                                    Get Started &gt;
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )
                    }
                    {
                        user && (
                            <>
                                <MainContainer />
                                <MovieConatiner />
                            </>
                        )
                    }
                </div>

                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Register;
