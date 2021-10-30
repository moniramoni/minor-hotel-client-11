import React from 'react';
import './SignIn.css'
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <div className="login-section align-items-center">
                <Row className="bg-light p-5 gy-2 w-100 m-auto">
                    <Col xs={12} md={6} lg={3} className="">
                    </Col>
                    <Col xs={12} md={6} lg={3} className="bg-dark text-light text-start p-5">
                        <h2 className="pt-3">SignIn</h2>
                        <hr className="w-25 signIn-hr1"/>
                        <p>Make Sure you have SignIn first <i class="fas fa-long-arrow-alt-right "></i></p>
                    </Col>
                    <Col xs={12} md={6} lg={3} className=" text-light signIn-info text-start p-5">
                        <h5 className="pt-3">SignIn via Google</h5>
                        <hr className="w-25 mb-4 signIn-hr2"/>
                        <button onClick={signInUsingGoogle} className="px-5 py-2 border-0 fs-4 fw-bold">Google</button>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="">
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SignIn;