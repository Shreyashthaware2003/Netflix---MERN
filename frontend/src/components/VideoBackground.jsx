import React from 'react';

function VideoBackground() {
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="border-4 border-[#919090] rounded-2xl">
                    <div className="relative w-full h-full flex justify-center items-center">
                        {/* Overlay */}
                        <div className="absolute left-[1px] bottom-0 inset-0 bg-gradient-to-r from-black bg-opacity-50 z-10 pointer-events-none rounded-xl"></div>

                        {/* Video */}
                        <video
                            src="/public/ms.mp4"
                            className="md:max-w-screen-lg rounded-xl z-0"
                            autoPlay
                            controls
                            muted
                        >
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoBackground;
