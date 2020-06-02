import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

    

    return (
        <div className="container mx-auto px-4 lg:px-2 content-persec-2">
            <div className="box-footer bg-red-gradient absolute left-0"></div>
            <div className="resp-footer block flex flex-wrap ml-auto">
                <ul className="ml-970-0">
                    <li className="font-bold text-lg text-red">Home</li>
                    <li className="mt-3"><Link to="/" className="text-base text-black">Jadwal Sholat</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Agenda</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Kegiatan</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Donasi</Link></li>
                </ul>
                <ul className="">
                    <li className="font-bold text-lg text-red">Kontak</li>
                    <li className="mt-3"><Link to="/" className="text-base text-black">No. Telepon</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Email</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Peta Map</Link></li>
                </ul>
                <ul className="mt-10 sm:mt-0">
                    <li className="font-bold text-lg text-red">Lain-lain</li>
                    <li className="mt-3"><Link to="/" className="text-base text-black">Tanggal Hijriyah</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Jadwal Sholat</Link></li>
                </ul>
                <ul className="mt-10 sm:mt-0">
                    <li className="font-bold text-lg text-red">Sosial Media</li>
                    <li className="mt-3">
                        <ul className="flex">
                            <li><Link to="/"><img src="../dist/image/icon/icon-sosmed/facebook-icon.svg" alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src="../dist/image/icon/icon-sosmed/twitter-icon.svg" alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src="../dist/image/icon/icon-sosmed/youtube-icon.svg" alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src="../dist/image/icon/icon-sosmed/instagram-icon.svg" alt=""/></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-center text-sm md:text-base mt-24 mb-5">Copyright © 2020 Al-akbar . All Rights Reserved</div>
        </div>
    )
}

export default Footer;
