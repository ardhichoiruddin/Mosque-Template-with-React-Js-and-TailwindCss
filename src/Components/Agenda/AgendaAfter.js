import React from 'react';
import AgendaSlider from './AgendaSlider/AgendaSlider';
import AgendaItem from './AgendaItem/AgendaItem';
import AgendaTab from './AgendaTab/AgendaTab';

const AgendaAfter = () => {
    return (
        <>
            <AgendaTab>
                <AgendaSlider/>
                <AgendaItem/>
            </AgendaTab>
        </>
    )
}

export default AgendaAfter;
