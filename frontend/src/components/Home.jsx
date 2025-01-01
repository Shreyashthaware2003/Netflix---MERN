import { React, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [active, setActive] = useState(null);

    const faqs = [
        { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!" },
        { question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
        { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
        { question: "How do I cancel?", answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
        { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
        { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
    ];


    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };


    const navigate = useNavigate();
    const user = useSelector(store => store.app.user);

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate]);

    return (
        <>
            <div>

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
                {
                    user && (
                        <>

                            <div className='h-1 bg-gray-600'></div>
                            <div className='flex justify-center items-center bg-black'>
                                <div className=' w-[1200px] grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white p-10'>
                                    <div className='flex flex-col flex-nowrap justify-center gap-6 order-2 md:order-1'>
                                        <h1 className='text-2xl md:text-start text-center md:text-6xl font-bold'>Enjoy on your TV</h1>
                                        <p className='text-base md:text-xl md:text-start text-center'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                    </div>
                                    <div className="relative flex items-center justify-center order-1 md:order-2">
                                        <img src="tv.png" className="relative z-10" alt="TV" />
                                        <video
                                            src="tv-video.m4v"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute top-0 md:left-[75px] md:w-[440px] h-full  z-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='h-1 bg-gray-600'></div>
                            <div className='flex justify-center items-center bg-black'>
                                <div className=' w-[1200px] grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white p-10'>
                                    <div className="relative flex items-center justify-center order-2 md:order-1">
                                        <img src="/public/mobile.jpg" className="relative z-10" alt="mobile" />
                                    </div>
                                    <div className='flex flex-col flex-nowrap justify-center gap-6 order-2 md:order-1'>
                                        <h1 className='text-2xl md:text-start text-center md:text-6xl font-bold'>Download your shows to watch offline</h1>
                                        <p className='text-base md:text-xl md:text-start text-center'>Save your favourites easily and always have something to watch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='h-1 bg-gray-600'></div>
                            <div className='flex justify-center items-center bg-black'>
                                <div className=' w-[1200px] grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white p-10'>
                                    <div className='flex flex-col flex-nowrap justify-center gap-6 order-2 md:order-1'>
                                        <h1 className='text-2xl md:text-6xl font-bold text-center md:text-start'>Enjoy on your TV</h1>
                                        <p className='text-base md:text-xl md:text-start text-center'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                    </div>
                                    <div className="relative flex items-center justify-center order-1 md:order-2">
                                        <img src="tv.png" className="relative z-10" alt="TV" />
                                        <video
                                            src="tv-video1.m4v"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute top-0 md:left-[75px] md:w-[485px] h-full  z-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='h-1 bg-gray-600'></div>
                            <div className='flex justify-center items-center bg-black'>
                                <div className=' w-[1200px] grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white p-10 order-1 md:order-2'>
                                    <div className="relative flex items-center justify-center">
                                        <img src="/public/child.png" className="relative z-10" alt="child" />
                                    </div>
                                    <div className='flex flex-col flex-nowrap justify-center gap-6 order-2 md:order-1'>
                                        <h1 className='text-2xl md:text-6xl font-bold text-center md:text-start'>Create profiles for kids</h1>
                                        <p className='text-base md:text-xl md:text-start text-center'>
                                            Create profiles for kids Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                                    </div>
                                </div>
                            </div>

                            <section className="flex flex-col justify-center items-center py-10 bg-black text-white w-full px-4">
                                <h2 className="text-xl md:text-3xl text-start md:text-center font-bold mb-6 w-full md:w-auto">Frequently Asked Questions</h2>
                                {faqs.map((faq, index) => (
                                    <div key={index} className="faq-box cursor-pointer mb-2 w-full flex flex-col justify-center items-center " onClick={() => toggleFAQ(index)}>
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
                                    <span className="text-lg">Ready to watch? Enter your email to create or restart your membership.</span>
                                    <div className="sec-email-btn mt-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
                                        <input
                                            type="text"
                                            placeholder="Email address"
                                            className="p-3 w-80 sm:w-[500px] bg-transparent border border-gray-300 rounded-md"
                                        />
                                        <div className='flex justify-start md:justify-center items-center w-full md:w-auto'>
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

                {/* footer */}
                <section className=" py-8 bg-black border-t">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <div className="flex items-center justify-between gap-6">
                            <img src="netflix.svg" className='w-24 md:w-36' alt="logo" />
                            <div className="flex items-center gap-4">
                                <a href="javascript:;"
                                    className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-300 hover:text-red-600 hover:border-red-600 focus-within:outline-0 focus-within:text-red-600 focus-within:border-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="javascript:;"
                                    className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-300 hover:text-red-600 hover:border-red-600 focus-within:outline-0 focus-within:text-red-600 focus-within:border-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M7.7117 9.93956C7.7117 8.66117 8.76298 7.62456 10.0601 7.62456C11.3573 7.62456 12.4092 8.66117 12.4092 9.93956C12.4092 11.218 11.3573 12.2546 10.0601 12.2546C8.76298 12.2546 7.7117 11.218 7.7117 9.93956ZM6.44187 9.93956C6.44187 11.909 8.06177 13.5055 10.0601 13.5055C12.0585 13.5055 13.6784 11.909 13.6784 9.93956C13.6784 7.97012 12.0585 6.37367 10.0601 6.37367C8.06177 6.37367 6.44187 7.97012 6.44187 9.93956ZM12.9761 6.23228C12.976 6.3971 13.0256 6.55824 13.1184 6.69532C13.2113 6.83239 13.3433 6.93926 13.4978 7.00239C13.6523 7.06552 13.8223 7.08209 13.9863 7.05C14.1503 7.01791 14.301 6.93861 14.4193 6.82211C14.5377 6.70561 14.6182 6.55716 14.6509 6.39552C14.6836 6.23388 14.667 6.06632 14.603 5.91402C14.5391 5.76173 14.4307 5.63153 14.2917 5.53991C14.1527 5.44829 13.9893 5.39935 13.822 5.39928H13.8217C13.5975 5.39939 13.3825 5.48717 13.224 5.64336C13.0654 5.79954 12.9763 6.01136 12.9761 6.23228ZM7.21337 15.5922C6.52637 15.5613 6.15296 15.4486 5.90481 15.3533C5.57583 15.2271 5.3411 15.0767 5.0943 14.8338C4.8475 14.591 4.69474 14.3598 4.56722 14.0356C4.47049 13.7912 4.35605 13.4231 4.32482 12.746C4.29066 12.014 4.28384 11.7941 4.28384 9.93962C4.28384 8.08512 4.29123 7.86584 4.32482 7.13323C4.35611 6.45617 4.47139 6.08878 4.56722 5.84362C4.6953 5.51939 4.84784 5.28806 5.0943 5.04484C5.34076 4.80162 5.57526 4.65106 5.90481 4.5254C6.15285 4.43006 6.52637 4.31728 7.21337 4.28651C7.95613 4.25284 8.17925 4.24612 10.0601 4.24612C11.9411 4.24612 12.1644 4.25339 12.9078 4.28651C13.5948 4.31734 13.9676 4.43095 14.2163 4.5254C14.5453 4.65106 14.7801 4.80195 15.0268 5.04484C15.2736 5.28773 15.4258 5.51939 15.5539 5.84362C15.6507 6.08806 15.7651 6.45617 15.7963 7.13323C15.8305 7.86584 15.8373 8.08512 15.8373 9.93962C15.8373 11.7941 15.8305 12.0134 15.7963 12.746C15.765 13.4231 15.65 13.7911 15.5539 14.0356C15.4258 14.3598 15.2733 14.5912 15.0268 14.8338C14.7804 15.0765 14.5453 15.2271 14.2163 15.3533C13.9683 15.4486 13.5948 15.5614 12.9078 15.5922C12.165 15.6258 11.9419 15.6326 10.0601 15.6326C8.1784 15.6326 7.9559 15.6258 7.21337 15.5922ZM7.15503 3.03717C6.40489 3.07084 5.8923 3.18806 5.44465 3.35973C4.98105 3.53701 4.58859 3.77484 4.19641 4.16073C3.80423 4.54662 3.56352 4.93401 3.38364 5.39089C3.20945 5.83234 3.09051 6.33723 3.05635 7.07651C3.02162 7.81695 3.01367 8.05367 3.01367 9.93956C3.01367 11.8255 3.02162 12.0622 3.05635 12.8026C3.09051 13.542 3.20945 14.0468 3.38364 14.4882C3.56352 14.9448 3.80429 15.3327 4.19641 15.7184C4.58853 16.1041 4.98105 16.3416 5.44465 16.5194C5.89314 16.6911 6.40489 16.8083 7.15503 16.842C7.90675 16.8756 8.14655 16.884 10.0601 16.884C11.9737 16.884 12.2139 16.8762 12.9653 16.842C13.7155 16.8083 14.2277 16.6911 14.6756 16.5194C15.139 16.3416 15.5317 16.1043 15.9239 15.7184C16.3161 15.3325 16.5563 14.9448 16.7367 14.4882C16.9108 14.0468 17.0304 13.5419 17.064 12.8026C17.0981 12.0616 17.1061 11.8255 17.1061 9.93956C17.1061 8.05367 17.0981 7.81695 17.064 7.07651C17.0298 6.33717 16.9108 5.83206 16.7367 5.39089C16.5563 4.93428 16.3154 4.54723 15.9239 4.16073C15.5323 3.77423 15.139 3.53701 14.6762 3.35973C14.2277 3.18806 13.7154 3.07028 12.9658 3.03717C12.2145 3.00351 11.9743 2.99512 10.0607 2.99512C8.14712 2.99512 7.90675 3.00295 7.15503 3.03717Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="javascript:;"
                                    className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-300 hover:text-red-600 hover:border-red-600 focus-within:outline-0 focus-within:text-red-600 focus-within:border-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M6.87818 15.5556V7.87128H4.31767V15.5556H6.87845H6.87818ZM5.59846 6.82229C6.49118 6.82229 7.04695 6.23223 7.04695 5.49481C7.03024 4.74059 6.49118 4.16699 5.61544 4.16699C4.7391 4.16699 4.16675 4.74059 4.16675 5.49474C4.16675 6.23216 4.72232 6.82223 5.58168 6.82223H5.59826L5.59846 6.82229ZM8.29546 15.5556H10.8558V11.2648C10.8558 11.0354 10.8725 10.8055 10.9401 10.6417C11.1251 10.1826 11.5464 9.70742 12.2539 9.70742C13.1802 9.70742 13.551 10.412 13.551 11.4451V15.5556H16.1112V11.1497C16.1112 8.78945 14.8482 7.69112 13.1636 7.69112C11.7825 7.69112 11.1759 8.46114 10.8389 8.9856H10.856V7.87154H8.29559C8.32901 8.59243 8.29539 15.5559 8.29539 15.5559L8.29546 15.5556Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Register;
