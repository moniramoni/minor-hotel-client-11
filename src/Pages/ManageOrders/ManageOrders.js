import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([])


    useEffect(() => {
        fetch("https://mysterious-island-82371.herokuapp.com/manageOrders")
        .then(res => res.json())
        .then(result => setManageOrders(result))

    }, [])

    return (
        <div>
            <h2>Manage Orders Here {manageOrders.length}</h2>
            <div className="text-center mt-5">
                <h1 className="my-5">Rooms & suits</h1>
            </div>
            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {manageOrders?.map((manageOrder) => (
                        <div className="col-md-4" key= {manageOrder._id}>
                            <div className="border mb-4">
                                <h2>{manageOrder._id}</h2>
                                <p>{manageOrder.singleServiceDat.singleService.title}</p>
                                {/* <div className="">
                                    <img className="w-100" src={manageOrder.image} alt="" />
                                </div>
                                <div className="text-start border-bottom">
                                    <h4 className="p-2 px-3">{manageOrder.title}</h4>
                                    <p className="p-2 px-3">{manageOrder.description.slice(0, 100)}...</p>
                                </div>
                                <div className="text-start p-3">
                                    <h6 className="">Capacity: {manageOrder.category} Bed</h6>
                                    <h6 className="">Per Night: ${manageOrder.price}</h6>
                                    <Link to={`/placeOrder/${manageOrder._id}`}><button>Book Now</button></Link>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;