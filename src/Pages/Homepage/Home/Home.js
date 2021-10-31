import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    const {isLoading} = useAuth()

    if(isLoading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;