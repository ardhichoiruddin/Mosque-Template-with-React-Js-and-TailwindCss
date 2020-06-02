import React from 'react';
import { NavLink } from "react-router-dom";


const AgendaTab = ({ children }) => {
    return(

        <div className="container mx-auto px-4 lg:px-2 overflow-hidden">
            <ul className="flex mb-8 mt-4 tab-agenda">
                <li className=""><NavLink exact to="/agenda" className="text-xs sm:text-base font-semibold">Event akan datang</NavLink></li>
                <li className="ml-6 sm:ml-8"><NavLink to="/agenda/agenda-sebelumnya" className="text-xs sm:text-base font-semibold">Event sebelumnya</NavLink></li>
            </ul>
            {
                children
            }
        </div>

    )
}


export default AgendaTab;