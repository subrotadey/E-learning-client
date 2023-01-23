import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();

    const { img, heading, price } = course;

    return (
        <div  className='pt-20'>
            <img src={img} alt="" />
            <h1>{heading}</h1>
            <small>price : {price}$</small>
        </div>
    );
};

export default CourseDetails;