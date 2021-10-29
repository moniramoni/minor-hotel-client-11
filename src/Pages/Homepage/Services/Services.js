import React, { useState, useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/addServices`)
        .then(res => res.json())
        .then(result => setServices(result))

    }, [])

    return (
        <div>
             <div className="text-center mt-5">
                <h1 className="my-5">I Grow By HELPING PEOPLE IN NEED</h1>
            </div>
            <div className="events-container m-auto mb-5">
                <div className="row container  m-auto">
                    {services?.map((service) => (
                        <div className="col-md-4" key= {service._id}>
                            <div className="border">
                                <div className="">
                                    <img className="w-100" src={service.image} alt="" />
                                </div>
                                <div className="p-2">
                                    <h4>{service.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;