import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className="py-5 container">
                <div className="about p-0 p-md-5 p-lg-4 p-sm-0">
                    <Container className="w-100">
                    <h1 className="mb-lg-5 mb-5 mb-0 mb-sm-0">Our Hotel</h1>
                        <Row className="w-100 pt-2" >
                            {/* -------------column first part------- */}
                            <Col xs={12} md={12} lg={6}>
                                <div>
                                    <h6 className="fs-2 fw-normal text-start py-4 ">Minor Hotel Facilities</h6>
                                    <p className="fw-light text-start d-md-none d-lg-block">The mission of the Minor Hotel is to put hospitality services on the highest level in order to satisfy the demands and expectations of guests. Our aim is to make the Hotel Grand a place for encounters.</p>
                                    <div>
                                        {/* -------- Facilities  row 1 ----------- */}
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
                                                <div className="recovery-story d-flex ps-3">
                                                    <div className="">
                                                    <i className="fas fa-biking color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Child friendly</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- Facilities  row 2 ----------- */}
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
                                                <div className="recovery-story d-flex ps-3">
                                                    <div className="">
                                                    <i className="fas fa-glass-martini-alt color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Mini bar</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- Facilities row 3 -----------  */}
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
                                                <div className="recovery-story d-flex ps-3">
                                                    <div className="">
                                                    <i className="fas fa-gamepad color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Games room</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                        {/* -------- Facilities row 4 -------------- */}
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
                                                <div className="recovery-story d-flex ps-3">
                                                    <div className="">
                                                    <i className="fas fa-wheelchair color fs-5"></i></div>
                                                    <div>
                                                        <h6 className="fw-normal text-start ps-1 fs-6">Wheelchair access</h6>
                                                    </div> 
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* -------- service row (year experience & members ) */}
                                        <Row className="w-100">
                                            <Col xs={12} md={12} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                                                <div className="recovery-story text-start px-2 py-4">
                                                    <button className="recovery-story px-5 py-1">Contact Us</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                               </div>
                            </Col>
                            {/* -------------column second part------- */}
                            <Col xs={12} md={12} lg={6} className="about-img mt-md-5 pt-md-5 mt-lg-0 pt-lg-0 mt-sm-5 pt-sm-5 mt-5 pt-5">
                                <div>
                                    <Row className="w-100 m-auto pb-4 d-flex justify-content-center align-items-center ">
                                        <Col  xs={6} md={6} lg={6} className="">
                                            <img className="w-100" src="https://i.ibb.co/ZLJncws/3d-rendering-modern-dining-room-and-living-room-with-luxury-decor-and-leather-sofa.jpg" alt="" />

                                        </Col>
                                        <Col  xs={6} md={6} lg={6}>
                                            <img className="w-100" src="https://i.ibb.co/LNK0Hp4/3d-rendering-luxury-modern-living-room-with-fabric-sofa-with-mock-up-frame.jpg" alt="" />

                                        </Col>
                                    </Row>
                                    <Row className="w-100 m-auto pb-4 d-flex justify-content-center align-items-center">
                                        <Col  xs={6} md={6} lg={6}>
                                            <img className="w-100 pb-4 " src="https://i.ibb.co/KDSW55B/3d-rendering-luxury-modern-bedroom-suite-hotel.jpg" alt="" />
                                        </Col>
                                        <Col  xs={6} md={6} lg={6}>
                                            <img className="w-100 pb-4" src="https://i.ibb.co/K0xtQkB/3d-rendering-luxury-classic-modern-bedroom-suite-in-hotel.jpg" alt="" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default About;
