import React from 'react';
import './Home.css';
import homeicon from '../../assets/homeicon.png';

function Home() {
    return (
        <>
            <h1 className='titulo'>Home</h1>
            <img src={homeicon} className='.img' />
        </>
    )
}

export default Home;