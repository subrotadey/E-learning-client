import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../../assets/icons/clock.svg'
import map from '../../../assets/icons/map.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-6 -mt-20'>
            <InfoCards bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Opening Hours" img={clock}></InfoCards>
            <InfoCards bgClass="bg-accent" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Our Locations" img={map}></InfoCards>
            <InfoCards bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Contact Us" img={phone}></InfoCards>
        </div>
    );
};

export default Info;