import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

function Header() {

    // Adding menu
    const menuName = [
        {
            name : 'Home',
            to : '/', 
        },
        {
            name : 'Agenda',
            to : '/agenda', 
        },
        {
            name : 'Kegiatan',
            to : '/', 
        },
        {
            name : 'Doa',
            to : '/', 
        },
        {
            name : 'Jadwal Sholat',
            to : '/', 
        },
    ]

    const [ toggle, setToggle ] = useState(false);

    const toggleHandler = () =>{
        setToggle(!toggle);
    }

    const headerFixed = () => {
        const navbar = document.querySelector('.headers');
        const scrollValue = window.scrollY;
    
        if (scrollValue > 200) {
            navbar.classList.add('is-fixed');
            navbar.classList.remove('is-fixed-out');
    
        } else if (scrollValue < 200) {
            navbar.classList.remove('is-fixed');
            navbar.classList.add('is-fixed-out');
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', headerFixed);
        return () => window.removeEventListener('scroll', headerFixed);

    },[])

    return (
        <>
            <div className="headers w-full">
                <nav className="relative bg-white block lg:flex items-center justify-between flex-wrap w-full bg-transparent py-3 md:py-6 px-4">
                    <div className="flex justify-between">
                        <div className="flex items-center flex-shrink-0 text-red mr-6 text-xl font-bold">
                            Al-Akbar
                        </div>
                        <button className="ml-auto mr-4 block lg:hidden px-4 py-1 rounded-md text-red text-sm bg-transparent border-solid border-2 border-red">Donasi</button>
                        <div className="block lg:hidden" onClick={toggleHandler}>
                            <div id="btn-menu" className="button-menu-resp">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className={`menu-box-resp ${toggle ? 'show-menu' : null} hidden lg:block lg:flex justify-center lg:items-center mr-auto lg:ml-2`}>
                        <div className="text-sm lg:flex-grow text-center lg:text-left">
                            {
                                menuName.map((menu, index) => (
                                    <NavLink key={index} to={menu.to} className="block mt-4 lg:inline-block lg:mt-0 text-black text-base lg:text-lg hover:text-black lg:mr-6">
                                        {menu.name}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <button className="ml-auto hidden lg:block px-4 py-1 rounded-md text-red text-lg bg-transparent border-solid border-2 border-red">Donasi</button>
                </nav>
            </div>
        </>
    )
}

export default Header;
