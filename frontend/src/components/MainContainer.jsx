import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
    return (
        <>
            <div className='py-32 px-4 md:px-10 bg-gradient-to-tr from-black to 
            bg-[#ff000d] w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='order-1'>
                        <VideoTitle />
                    </div>
                    <div className='md:order-1'>
                        <VideoBackground />
                    </div>
                </div>

                <div className='w-full flex justify-center items-center py-10'>
                    <div className=' flex flex-col justify-center items-center flex-nowrap'>
                        <div className='rounded-3xl bg-gradient-to-r from-bg-[#ffffff1a]  p-4 max-w-[900px] text-white'>
                            <h1 className='text-xl font-bold tracking-wide py-2'>Mismatched</h1>
                            <span className='font-semibold'>2024 | 3 Seasons | A | Romance </span>
                            <p className='py-2 font-semibold'>After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.</p>
                            <p className='py-2 font-semibold'>Starring: Prajakta Koli, Rohit Saraf, and Taaruk Raina</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer