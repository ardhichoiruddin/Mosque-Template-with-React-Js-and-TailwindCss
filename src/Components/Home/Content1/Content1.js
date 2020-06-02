import React from 'react';

// iMAGE
import Imagecontent1 from '../../../Assets/image/content1-1.svg';
import Imagecontent2 from '../../../Assets/image/content1-2.svg';
import Imagecontent3 from '../../../Assets/image/content1-3.svg';


function Content1() {
    return (
        <div className="container mx-auto px-4 lg:px-2 content-persec">
            <div className="">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold leading-normal tracking-wide max-w-5xl">
                    “Barangsiapa yang menunjuki
                    kepada kebaikan maka dia akan mendapatkan pahala seperti pahala
                    orang yang mengerjakannya” <span className="text-red text-base md:text-xl">(HR. Muslim no. 1893)</span></h1>
                <div className="block md:flex mt-10 items-start">

                    <div
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 md:mr-4 h-content-1">
                        <img className="w-full image-content-1" src={Imagecontent1} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                                Mewujudkan terjaganya kesucian, kebersihan, dan ketertiban masjid
                            </p>
                        </div>
                    </div>

                    <div
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 md:mr-4 h-content-1">
                        <img className="w-full image-content-1" src={Imagecontent2} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                                Menyelenggarakan berbagai macam kegiatan untuk memakmurkan masjid dan meningkatkan syiar
                                Islam.
                            </p>
                        </div>
                    </div>

                    <div
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 h-content-1">
                        <img className="w-full image-content-1" src={Imagecontent3} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                                Membentuk unit-unit kerja yang bergerak dalam bidang keuangan dan bisnis untuk menggali dana
                                guna membiayai pengelolaan masjid dan kemaslahatan umat.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content1;
