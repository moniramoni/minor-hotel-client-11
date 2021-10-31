import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([])
    // const [isDeleted, setIsDeleted] = useState(null)
    // const [approve, setApprove] = useState('Pending')
    // const [isUpdate, setIsUpdate] = useState(null)
    // console.log(isDeleted)


    useEffect(() => {
        fetch("https://mysterious-island-82371.herokuapp.com/manageOrders")
        .then(res => res.json())
        .then(result => setManageOrders(result))
    }, [manageOrders])


    // delete button 
    const handleDeleteManageOrders = (id) => {
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/deleteManageOrders/${id}`,{
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



    // Approved button
    const handleUpdateManageOrders = (id) => {
        const updateStatus = manageOrders.find(
            (update) => update?._id === id
        );
        updateStatus.status = "approved";

        const uri = `http://localhost:5000/manageOrderUpdate/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Approved successfully");
                }
            });
    };

    

    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="my-5">All Booked Room Is Here</h1>
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

                                    {/* <h6 onClick={() => setApprove("Approved")} className="">Approve</h6> */}

                                    {/* approve btn */}
                                    <button onClick={() => handleUpdateManageOrders(manageOrder._id)} className="px-4 mx-1 py-1 my-2">{manageOrder.status}</button>

                                    {/* delete btn */}
                                    <button onClick={() => handleDeleteManageOrders(manageOrder._id)} className="px-5 py-1 my-2">Delete</button>
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