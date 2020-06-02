import React from 'react';
import Head from './Head/Head';
import Content1 from './Content1/Content1';
import Kegiatan from './Kegiatan/Kegiatan';
import Agenda from './Agenda/Agenda';

import Pengurus from './Pengurus/Pengurus';
import Donasi from './Donasi/Donasi';

function Home() {
    return (
        <>
            <Head/>
            <Content1/>
            <Kegiatan/>
            <Agenda/>
            <Pengurus/>
            <Donasi/>
        </>
    )
}

export default Home;
