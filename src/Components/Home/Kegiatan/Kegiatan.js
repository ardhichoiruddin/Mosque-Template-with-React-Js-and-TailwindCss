import React from 'react';

import Slider from '../../Slider/Slider';
import SliderItem from '../../Slider/SliderItem';

import ImageCon from '../../../Assets/image/contoh.jpg';



function Kegiatan() {

    const sliderConfiguration= {
        type: 'slider',
        bound : true,
        rewind : false,
        startAt: 0,
        perView: 4,
        gap: 22,
        touchRatio: 1,
        peek: {
            before: 40,
            after: -10
        },
        breakpoints: {
            768: {
                perView: 3,
                gap: 14
            },
            640: {
                gap: 8,
                perView: 3,
                peek: {
                    before: -22,
                    after: -50
                },
            },
    
            441: {
                gap: 8,
                perView: 3,
                peek: {
                    before: -10,
                    after: -86
                },
            }
        }
    };

    return (
        <>
            <div className="container mx-auto px-4 lg:px-2 content-persec">
                <h2 className="text-xl md:text-2xl text-black font-bold">Kegiatan</h2>
            </div>
            <div className="mt-4">
                <Slider nameClass="glide-kegiatan" sliderConfiguration={sliderConfiguration}>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden']}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg underline leading-normal label-kegiatan">Ramadhan</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">Buka bersama bulan suci ramadhan</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4">11 Juni 2019</p>
                        </div>
                    </SliderItem>
                </Slider>
            </div>
        </>
    )
}

export default Kegiatan;
