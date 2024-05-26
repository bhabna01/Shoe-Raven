import { useState } from "react";
import backgroundImage from '../../assets/shoe1.jpg'
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-6 md:p-10">
                    <h1 className="mb-5 text-5xl font-bold">Step into Style</h1>
                    <p className="mb-5 text-lg">
                        Discover the latest trends in footwear. From casual sneakers to formal shoes, we have something for every occasion.
                    </p>
                    <button className="btn btn-primary btn-lg transform transition-transform hover:scale-105">
                        <Link to="/all-products">Shop Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;