import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
    return (
        <>
            <div className='pt-32 pb-10 md:pt-32 md:pb-10 px-4 md:px-10 bg-gradient-to-tr from-black to 
            bg-[#ff000d] w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='order-1'>
                        <VideoTitle />
                    </div>
                    <div className='md:order-1'>
                        <VideoBackground />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center py-10'>
                    <div className=' flex flex-col justify-center items-center flex-nowrap'>
                        <div className='rounded-3xl bg-gradient-to-r from-bg-[#ffffff1a]  p-4 max-w-[900px] text-white'>
                            <h1 className='text-xl font-bold tracking-wide py-2'>Mismatched</h1>
                            <span className='font-semibold'>2024 | 3 Seasons | A | Romance </span>
                            <p className='py-2 font-semibold'>After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.</p>
                            <p className='py-2 font-semibold'>Starring: Prajakta Koli, Rohit Saraf, and Taaruk Raina</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center max-w-[1300px] mx-auto pt-20 gap-8'>
                        <h1 className='text-4xl font-bold text-white'>More Details</h1>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 text-white'>
                            <div className='flex flex-col justify-center bg-gradient-to-r from-bg-[#ffffff1a] p-6 rounded-3xl font-semibold gap-4 h-72'>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1 className=''>Watch offline</h1>
                                    <span className='text-gray-400 text-sm'>Available to download</span>
                                </div>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1>Genres</h1>
                                    <p className='text-gray-400 text-sm'>Romantic TV Dramas, TV Dramas, TV Shows Based on Books, Teen TV Shows, TV Comedies, Romantic TV Comedies, and Hindi-Language TV Shows</p>
                                </div>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1>This show is ...</h1>
                                    <p className='text-gray-400 text-sm'>Quirky, Heartfelt, Teen, Notable Soundtrack, Underdog, Indian, Based on a Book, Romantic, Dramedy, and TV</p>
                                </div>
                            </div>
                            <div className='flex flex-col bg-gradient-to-r from-bg-[#ffffff1a] p-6 rounded-3xl font-semibold gap-4 h-72'>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1 className=''>Audio</h1>
                                    <span className='text-gray-400 text-sm'>English, Hindi - Audio Description, and Hindi [Original]
                                    </span>
                                </div>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1>Subtitles</h1>
                                    <p className='text-gray-400 text-sm'>English, Hindi</p>
                                </div>

                            </div>
                            <div className='flex flex-col bg-gradient-to-r from-bg-[#ffffff1a] p-6 rounded-3xl font-semibold gap-4 h-72'>
                                <div className='flex flex-col flex-nowrap'>
                                    <h1 className=''>Cast</h1>
                                    <span className='text-gray-400 text-sm'>Prajakta Koli, Rohit Saraf, Taaruk Raina, Muskkaan Jaferi, Rannvijay Singha, Vidya Malavade, Ahsaas Channa, Abhinav Sharma, Lauren Robinson, and Vihaan Samat</span>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer