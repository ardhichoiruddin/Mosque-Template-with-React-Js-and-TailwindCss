import React from 'react';

import Slider from '../../Slider/Slider';
import SliderItem from '../../Slider/SliderItem';

import ImageCon from '../../../Assets/image/contoh.jpg';

function Pengurus() {

    const sliderConfiguration= {
        type: 'slider',
        bound : true,
        rewind : false,
        startAt: 0,
        perView: 5,
        gap: 22,
        touchRatio: 1,
        peek: {
            before: 0,
            after: 20
        },
        breakpoints: {
            1024: {
                perView: 4,
                gap: 10,
                peek: {
                    before: -30,
                    after: -80
                },
            },
            768: {
                perView: 4,
                gap: 10,
                peek: {
                    before: -20,
                    after: -80
                },
            },
            640: {
                perView: 2,
                gap: 20,
                peek: {
                    before: -20,
                    after: -10
                },
            }
        }
    };

    return (
        <>
            <div className="container mx-auto px-4 lg:px-2 md:px-22 content-persec">
                <h2 className="text-xl md:text-2xl text-black font-bold">Pengurus</h2>
            </div>
            <div className="mt-4 relative">

                <Slider nameClass="glide-pengurus" sliderConfiguration={sliderConfiguration}>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                    <SliderItem addClasses={['p-2','lg:p-4']}>
                        <div className="mt-3">
                            <div className="bg-red-gradient pengurus-img__parent relative m-auto">
                                <img src={ImageCon} alt="" className="pengurus-img"/>
                            </div>
                            <div className="text-center">
                                <h4 className="text-base lg:text-lg text-red mt-4 font-bold">Abdul bin Asyad</h4>
                                <p className="text-sm lg:text-base text-black mt-0 sm:mt-1">Ketua</p>
                            </div>
                        </div>
                    </SliderItem>
                </Slider>
                <div className="pengurus-box-bg bg-red-gradient absolute"></div>
            </div>
        </>
    )
}

export default Pengurus;
