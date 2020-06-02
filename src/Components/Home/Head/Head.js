import React from 'react';

import ImageContoh from '../../../Assets/image/contoh.jpg';

function Head() {
    return (
        <div className="head container mx-auto px-4 lg:px-2">
            <div className="flex mt-8">
                <div className="flex-1 mt-13">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold tracking-wide">Tempat yang paling
                        dicintai oleh Allah
                        adalah Masjid. <span className="text-lg sm:text-xl text-red">– hadits</span></h1>
                    <p className="text-sm sm:text-base lg:text-lg text-black leading-normal md:leading-relaxed tracking-wide mt-2">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <button className="px-12 py-2 rounded-md font-bold bg-red-gradient text-lg text-white mt-5">Agenda</button>
                </div>
                <div className="flex-1 hidden md:block">
                    <div className="box-head ml-auto relative bg-red-gradient">
                        <img src={ImageContoh} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head;
