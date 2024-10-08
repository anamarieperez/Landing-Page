import React from 'react'
import Navbar from "./Navbar";
import bannerbackground from "../Assets/home-banner-background-a.png";
import bannerimage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";
const Home = () => {
  return (
    <div classname="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={bannerbackground} alt=""/>
          </div>
          <div className="home-text-section">
            <div className="home-image-container">
              <img src={bannerimage} alt=""/>
            </div>
            <h1 className="primary-heading">
                Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home
