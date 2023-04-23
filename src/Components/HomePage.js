import React from 'react';
import nodata from "../../src/Img/nodata.avif";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';

const HomePage = () => {
  return (
    <div>
    <NavBar />
    <div className="wrapper">
      <SideBar />
      <div className="w-full px-5">
        <h1 className="pt-3 text-2xl text-blue-900 font-semibold">
         Home Page
        </h1>

        <div className="pt-4 flex justify-center items-center h-full">
        <div className="text-center">
        
          <img src={nodata} alt="no image" />
          <Link to="/createappointment">
          <button className="px-5 pt-4 font-sans text-base font-normal Booking-btn ">
              <i className="fa-solid fa-plus pr-3"></i>Create Appointment
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;

