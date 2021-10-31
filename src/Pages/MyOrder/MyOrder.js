import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])
    console.log(myOrders)
    // const [isDeleted, setIsDeleted] = useState({})


    useEffect(() => {
        fetch(`https://mysterious-island-82371.herokuapp.com/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(result => setMyOrders(result))

    }, [user.email, myOrders])


    // myOrder Delete
    const handleDeleteMyOrders = (id) => {
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/deleteMyOrders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                
                alert(' Delete Success')
            }
        })
        }
        
        console.log(id)
    }


    return (
        <div>
            <div className="m-auto mb-5 p-5 bg-dark text-light">
                <div className="container p-5 bg-dark top-section ">
                    <Row className="px-5 w-100 d-flex justify-content-center">
                        <Col xs={12} md={6} lg={2} className="p-2 p-md-0 p-lg-0 p-sm-2 justify-content-end">
                            <div className="">
                               <img className="user-photo" src={user?.photoURL} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="justify-content-start p-2 p-md-0 p-lg-0 p-sm-2">
                            <div className="text-start">
                                <h3 className="text-start  fs-4">{user?.displayName}</h3>
                                <h6 className="text-start text-light fw-light"><span className="color fs-6 fw-light">Address: </span> {myOrders[0]?.address}, {myOrders[0]?.city} City. </h6>
                                <h6 className="text-start fw-light"><span className="color fs-6 fw-light">Number-: </span> {myOrders[0]?.phone} </h6>
                                <h6 className="text-start fw-light"><span className="color fs-6 fw-light">Email: </span> {user?.email} </h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {myOrders?.map((order) => (
                        <div className="col-md-4" key= {order._id}>
                            <div className="border mb-4">
                                <div className="">
                                    <img className="w-100" src={order.singleServiceDat.singleService.image} alt="" />
                                </div>
                                <div className="text-start border-bottom">
                                    <h4 className="p-2 px-3">{order.singleServiceDat.singleService.title}</h4>
                                    <p className="p-2 px-3">{order.singleServiceDat.singleService.description.slice(0, 100)}...</p>
                                </div>
                                <div className="text-start p-3">
                                    <h6 className="">Capacity: {order.singleServiceDat.singleService.category} Bed</h6>
                                    <h6 className="">Per Night: ${order.singleServiceDat.singleService.price}</h6>
                                    <h6 className="">Booked Status: {order.status}</h6>

                                    <button className="px-4 py-1 my-2" onClick={() => handleDeleteMyOrders(order._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;