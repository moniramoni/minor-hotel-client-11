import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const {serviceId} = useParams();
    const [singleService, setSingleService] = useState({});
    // console.log(singleService)


    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        data.status='Pending';
        data.singleServiceDat={singleService};
        console.log(data);

        fetch('https://mysterious-island-82371.herokuapp.com/myOrder',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };

    useEffect(() => {
        fetch(`https://mysterious-island-82371.herokuapp.com/singleService/${serviceId}`)
        .then(res => res.json())
        .then(data => setSingleService(data));
    },[serviceId])

    return (
        <div className="p-5">
             <div className="bg-dark text-light">
                <h3 className="fs-1 fw-bold text-center py-4">{singleService?.title}</h3>
            </div>
            <Row className="p-2 w-md-50 w-lg-50 w-100 m-auto justify-content-center align-items-center">
                <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                    <div className="d-flex text-center text-lg-end text-md-end justify-content-end pe-3">
                        <div className="">
                            <i className="fas fa-bed fs-4 color "></i></div>
                        <div>
                            <h6 className="fw-bold text-center text-lg-end text-md-end ps-1 fs-6"><span  className="fw-light fs-6 text-start">Capacity: </span>{singleService?.category} Bed</h6>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                    <div className="recovery-story d-flex ps-5">
                        <div className="">
                        <i className="fas fa-hand-holding-usd color fs-4"></i></div>
                        <div>
                            <h6 className="fw-bold text-center text-lg-end text-md-end ps-1 fs-6"><span  className="fw-light fs-6 text-start">Per Night: </span> ${singleService?.price}</h6>
                        </div> 
                    </div>
                </Col>
            </Row>
            <div className="py-5 container">
                <div className="about p-0 p-md-5 p-lg-0 p-sm-0">
                    <Container className="w-100">
                        <Row className="w-100 justify-content-center align-items-center" >
                            {/* -------------column first part------- */}
                            <Col xs={12} md={12} lg={6}>
                                <div>
                                    <h3 className="fs-4 fw-bold text-start pb-4 ">Facilities</h3>
                                    <div>
                                        {/* -------- service row 1 (icon & service ) */}
                                        <Row className="w-100 m-auto justify-content-start align-items-center py-1">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="d-flex text-start justify-content-start pe-1">
                                                    <div className="">
                                                        <i className="fas fa-wifi fs-5 color pe-1"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">High speed in-room wifi</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story d-flex">
                                                    <div className="">
                                                    <i className="fas fa-biking color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Child friendly</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row 2 (icon & service ) */}
                                        <Row className="p-y w-100 m-auto justify-content-start align-items-center py-1">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="d-flex text-start justify-content-start pe-1">
                                                    <div className="">
                                                        <i className="fas fa-swimming-pool fs-5 color pe-1"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Swimming pool</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story d-flex">
                                                    <div className="">
                                                    <i className="fas fa-glass-martini-alt color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Mini bar</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row 3 (icon & service ) */}
                                        <Row className="p-y w-100 m-auto justify-content-start align-items-center py-1">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="d-flex text-start justify-content-start pe-1">
                                                    <div className="">
                                                        <i className="fas fa-hot-tub fs-5 color pe-1"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Hot tub</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story d-flex">
                                                    <div className="">
                                                    <i className="fas fa-gamepad color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Games room</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row (year experience & members ) */}
                                        <Row className="p-y w-100 m-auto justify-content-start align-items-center py-1">
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="d-flex text-start justify-content-start pe-1">
                                                    <div className="">
                                                        <i className="fas fa-bath fs-5 color pe-1"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Bath</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story d-flex">
                                                    <div className="">
                                                    <i className="fas fa-wheelchair color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Wheelchair access</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                               </div>
                            </Col>
                            {/* -------------column second part------- */}
                            <Col xs={12} md={12} lg={6} className="mt-md-5 pt-md-5 mt-lg-0 pt-lg-0 mt-sm-5 pt-sm-5 mt-5">
                                <div className="pb-3">
                                    <img className="w-100 rounded" src={singleService?.image} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <div className="pt-5">
                            <h3 className="fs-4 fw-bold text-center pt-3 pb-2">Description</h3>
                            <p className="pb-3 fw-light text-center">{singleService?.description}</p>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="">
                <form className=" border shipping-form d-block w-75 m-auto p-5" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="fs-4 fw-bold text-center pb-4">Place Information </h3>
                    <input 
                        className="w-75 my-2"
                        defaultValue={user?.displayName} {...register("name", { required: true })} 
                    />
                    {errors?.displayName && <span className="text-danger">This field is required</span>}
                    <br />
                    <input
                        className="w-75 my-2"
                        defaultValue={user?.email} {...register("email", { required: true })} 
                    />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                    <br />
                    <input 
                        className="w-75 my-2"
                        placeholder="Address" defaultValue="" {...register("address", { required: true })} 
                    />
                    <br />
                    <input
                        className="w-75 my-2"
                        placeholder="City" defaultValue="" {...register("city")} 
                    />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                    <br />
                    <input 
                        className="w-75 my-2"
                        placeholder="phone number" defaultValue="" {...register("phone")} 
                    />
                    <br />
                    <input
                        // placeholder="booked date"
                        type="date"
                        className="p-2 w-75 " {...register("date")}
                    />
                    <br />
                    <input className="px-5 my-4 w-50 bg-dark text-light border-0 py-2 rounded" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;