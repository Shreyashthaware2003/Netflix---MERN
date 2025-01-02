import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";


function VideoTitle() {
    return (
        <>
            <div className='md:absolute right-[23%] w-full text-white pt-[14%] flex flex-col flex-nowrap justify-center items-center z-20'>
                <div className='flex justify-center items-center text-sm font-bold'>
                    <img src="logo.png" className='w-10' alt="" />
                    <span className='uppercase tracking-widest'>series</span>
                </div>
                <img src="ms.webp" className='w-56' alt="" />
                <div className='flex flex-nowrap justify-center items-center font-bold tracking-wide gap-2 my-4'>
                    <button className='bg-[#e50914] w-28 py-1 flex justify-center items-center flex-nowrap gap-2 rounded-md  hover:bg-red-700 duration-500'>Play<FaPlay className='text-xs' /></button>
                    <button className=' bg-transparent w-auto md:w-36 border-white border py-1 px-2 rounded-md hover:bg-white hover:text-black duration-500 flex justify-center items-center gap-2'>Watch more<IoIosInformationCircle className='' /></button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle