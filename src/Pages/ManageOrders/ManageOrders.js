import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)
    const [approve, setApprove] = useState('Pending')
    // const [isUpdate, setIsUpdate] = useState(null)
    console.log(isDeleted)


    useEffect(() => {
        fetch("https://mysterious-island-82371.herokuapp.com/manageOrders")
        .then(res => res.json())
        .then(result => setManageOrders(result))
    }, [isDeleted])


    const handleDeleteManageOrders = (id) => {
        fetch(`http://localhost:5000/deleteManageOrders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                setIsDeleted(true);
                alert('Are sure you want to Delete?')
            }
            else{
                setIsDeleted(false);
            }
        })
        
        console.log(id)
    }
    // Update booked Status
    // const handleUpdateManageOrders = (id) => {
    //     fetch(`http://localhost:5000/deleteManageOrders/${id}`,{
    //         method: "PUT",
    //         headers: {"content-type": "application/json"}
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         if(result.modifiedCount > 0){
    //             alert('Approved Success')
    //         }
    //     })
        
    //     console.log(id)
    // }

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
                                <div className="">
                                    <img className="w-100" src={manageOrder.singleServiceDat.singleService.image} alt="" />
                                </div>
                                <div className="text-start border-bottom">
                                    <h4 className="p-2 px-3">{manageOrder.singleServiceDat.singleService.title}</h4>
                                    <p className="p-2 px-3">{manageOrder.singleServiceDat.singleService.description.slice(0, 100)}...</p>
                                </div>
                                <div className="text-start p-3">

                                    <h6 className="">Capacity: {manageOrder.singleServiceDat.singleService.category} Bed</h6>

                                    <h6 className="">Per Night: ${manageOrder.singleServiceDat.singleService.price}</h6>

                                    <h6 onClick={() => setApprove("Approved")} className="">Approve</h6>

                                    {/* approve btn
                                    <button onClick={() => setApprove("Approved")} className="me-2 pe-2">Pending</button> */}

                                    {/* delete btn */}
                                    <button onClick={() => handleDeleteManageOrders(manageOrder._id)} className="pe-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;