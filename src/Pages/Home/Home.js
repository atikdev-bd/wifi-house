import React, { useContext } from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";

import wifi from "../../Assets/wifi.json";
import wifi2 from "../../Assets/wifi2.json";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../UseTitle/UseTitle";
import About from "../About/About";
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  const { services,} = useContext(AuthContext);
  useTitle('Home')

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div className="flex  bg-stone-400 justify-center">
        <div>
          <Lottie animationData={wifi}></Lottie>
        </div>
        <div>
          <Lottie animationData={wifi2}></Lottie>
        </div>
      </div>
        <h1 className="text-center service text-4xl font-bold mt-6 text-teal-700">
          Our services
        </h1>
      

      <div className="grid lg:grid-cols-2 gap-4 mx-8  mt-14 ">
        {" "}
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/allService">
          <button className="btn no-animation hover:bg-stone-500">
            Show All
          </button>
        </Link>
      </div>
      <About></About>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
