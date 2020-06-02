import React from 'react';

import Slider from '../../Slider/Slider';
import SliderItem from '../../Slider/SliderItem';

import CallenderIconWhite from '../../../Assets/image/icon/callender-icon-white.svg';
import ImageCon from '../../../Assets/image/contoh.jpg';

function AgendaSlider() {

    const sliderConfiguration= {
        type: 'slider',
        bound : true,
        rewind : true,
        rewindDuration : 2000,
        gap: 12,
        autoplay : 6000,
        touchRatio: 1,
        breakpoints: {
            640: {
                gap: 20
            },
        }
    };

    return (
    
        <div>
            <Slider nameClass="agenda-top" sliderConfiguration={sliderConfiguration} sliderBullets={3}>
                <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden','agenda-top__box']}>
                    <div className="animation-text max-w-screen-md p-6 md:p-10">
                        <h1 className="text-xl md:text-2xl font-bold text-white leading-snug md:leading-normal">Mengaji bersama sultan dan warga di pagi hari</h1>
                        <p className="text-base text-white mt-1">Allah menurunkan musibah kepada manusia agar keangkuhan yang melekat pada jiwa ....</p>
                        <div className="flex mt-2">
                            <img src={CallenderIconWhite} alt=""/>
                            <span className="text-xs md:text-sm text-white ml-2">Rabu, 23 September 2019</span>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden','agenda-top__box']}>
                    <div className="animation-text max-w-screen-md p-6 md:p-10">
                        <h1 className="text-xl md:text-2xl font-bold text-white leading-snug md:leading-normal">Mengaji bersama sultan dan warga di pagi hari</h1>
                        <p className="text-base text-white mt-1">Allah menurunkan musibah kepada manusia agar keangkuhan yang melekat pada jiwa ....</p>
                        <div className="flex mt-2">
                            <img src={CallenderIconWhite} alt=""/>
                            <span className="text-xs md:text-sm text-white ml-2">Rabu, 23 September 2019</span>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden','agenda-top__box']}>
                    <div className="animation-text max-w-screen-md p-6 md:p-10">
                        <h1 className="text-xl md:text-2xl font-bold text-white leading-snug md:leading-normal">Mengaji bersama sultan dan warga di pagi hari</h1>
                        <p className="text-base text-white mt-1">Allah menurunkan musibah kepada manusia agar keangkuhan yang melekat pada jiwa ....</p>
                        <div className="flex mt-2">
                            <img src={CallenderIconWhite} alt=""/>
                            <span className="text-xs md:text-sm text-white ml-2">Rabu, 23 September 2019</span>
                        </div>
                    </div>
                </SliderItem> 
            </Slider>
        </div>
    )
}

export default AgendaSlider;
