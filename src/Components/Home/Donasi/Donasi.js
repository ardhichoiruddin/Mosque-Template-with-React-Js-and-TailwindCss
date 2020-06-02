import React from 'react';

function Donasi() {
    return (
        <div className="container mx-auto px-4 lg:px-2 text-center content-persec-2">
            <h1
                className="text-xl md:text-2xl lg:text-3xl text-black font-bold leading-normal tracking-wide max-w-screen-xl m-auto">
                “Jika seseorang
                meninggal dunia, maka terputuslah amalannya kecuali tiga perkara (yaitu): sedekah jariyah, ilmu yang
                dimanfaatkan, atau do’a anak yang sholeh” <span className="text-red text-base lg:text-xl">(HR. Muslim no.
                    1631)</span></h1>
            <div className="mt-4">
                <p className="text-base text-black">total donasi yang terkumpul</p>
                <h4 className="text-3xl font-extrabold text-black mt-2">Rp. 342,000,000</h4>
            </div>
            <button className="px-12 py-2 font-bold rounded-md bg-red-gradient text-lg text-white mt-5">Donasi</button>
        </div>
    )
}

export default Donasi;
