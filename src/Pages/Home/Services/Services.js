import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Services Area</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ipsum rem. Ex, nulla sed tempore sequi doloremque ut delectus fugit.</p>
            </div>
            <div>
                <h2>services: {services.length}</h2>
                {

                }
            </div>


        </div>
    );
};

export default Services;