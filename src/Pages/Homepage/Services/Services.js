import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://mysterious-island-82371.herokuapp.com/addServices`)
        .then(res => res.json())
        .then(result => setServices(result))

    }, [])

    return (
        <div>
             <div className="text-center mt-5">
                <h1 className="my-5">Rooms & suits</h1>
            </div>
            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {services?.map((service) => (
                        <div className="col-md-4" key= {service._id}>
                            <div className="border mb-4">
                                <div className="">
                                    <img className="w-100" src={service.image} alt="" />
                                </div>
                                <div className="text-start border-bottom">
                                    <h4 className="p-2 px-3">{service.title}</h4>
                                    <p className="p-2 px-3">{service.description.slice(0, 100)}...</p>
                                </div>
                                <div className="text-start p-3">
                                    <h6 className="">Capacity: {service.category} Bed</h6>
                                    <h6 className="">Per Night: ${service.price}</h6>
                                    <Link to={`/placeOrder/${service._id}`}><button>Book Now</button></Link>
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