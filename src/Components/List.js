import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import DeleteAppointment from "../Components/DeleteAppointment";
import { Link } from "react-router-dom";
import nodata from "../../src/Img/nodata.avif";


function List() {
  const [showResults, setShowResults] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {



    if (localStorage.getItem("appointments") !== null) {
      setShowResults(true);
      setAppointments(JSON.parse(localStorage.getItem("appointments")));
    }
    console.log(appointments,"appointments")
  }, []);

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <SideBar />
        <div className="w-full px-5">
          <h1 className="pt-3 text-2xl text-blue-900 font-semibold">
            List View
          </h1>

          { appointments.length === 0 ? (
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
        
         
          ) : (
            <div className="pt-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 w-auto">S.No</th>
                    <th className="border px-4 py-2 w-auto">Date</th>
                    <th className="border px-4 py-2 w-auto">Start Time</th>
                    <th className="border px-4 py-2 w-auto">End Time</th>
                    <th className="border px-4 py-2 w-auto">Client</th>
                    <th className="border px-4 py-2 w-auto">Team Members</th>
                    <th className="border px-4 py-2 w-auto">Topics to cover</th>
                    <th className="border px-4 py-2 w-auto">Remarks</th>
                    <th className="border px-4 py-2 text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {showResults &&
                    appointments.map((e, i) => (
                      <tr key={i}>
                        <td className="border px-4 py-2 text-center">{i + 1}</td>
                        <td className="border px-4 py-2 text-center">{e.date}</td>
                        <td className="border px-2 py-2 text-center">
                          {e.startTime}
                        </td>
                        <td className="border px-2 py-2 text-center">
                          {e.endTime}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {e.client}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {e.teamMembers}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {e.topicsToCover}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {e.remarks}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <DeleteAppointment onDelete={() => handleDelete(i)} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className="text-center">
        
      
        <Link to="/createappointment">
        <button className="px-5 pt-4  mt-4 font-sans text-base font-normal Booking-btn ">
           Add More Appointments
          </button>
        </Link>
      </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

export default List;
