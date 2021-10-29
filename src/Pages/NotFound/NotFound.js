import React from 'react';
import './NotFound.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="bg-image p-5 gy-2 w-100">
                <Container>
                    <Row className="w-100 pt-5 mt-5">
                        <Col xs={12} md={6} lg={6} className=" text-light p-5 text-start">
                            <h2 className="fs-1 fw-bold mb-4">Oh no!! It looks like this page is missing..</h2>
                            <p  className="mb-4">Not to worry. You can head over to our Homepage</p>
                            <Link to="/home"><button className="notfound-btn bg-dark text-light px-5 py-2 border-0 rounded">Go Back To Home</button></Link>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="">
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NotFound;