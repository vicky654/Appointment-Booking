import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = `xl:w-60 md:w-48 sm:w-40 min-h-screen text-xl font-extrabold secondary-color text-blue-50 font-mono text-left py-2 ${
    isOpen ? 'block' : 'hidden'
  }`;

  return (
    <>
     <div>
       <button
        onClick={toggleSidebar}
        className="fixed top-4  left-2 bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isOpen ?    <i className="fa-solid fa-close "></i> :  <i className="fa-solid fa-bars "></i>}
      </button>
     </div>
      <div className={sidebarClasses}>
        {isOpen && (
          <ul>
              <Link to="/HomePage">
              <li className="px-5 pt-4 font-sans text-base font-normal">
                <i className="fa-solid fa-home pr-3"></i>
              Dashboard
              </li>
            </Link>
            <Link to="/createappointment">
              <li className="px-5 pt-4 font-sans text-base font-normal">
                <i className="fa-solid fa-plus pr-3"></i>
                Create Appointment
              </li>
            </Link>

            <Link to="/listview">
              <li className="px-5 pt-4 font-sans text-base font-normal">
                <i className="fa-solid fa-list pr-3"></i>
                List View
              </li>
            </Link>

            <Link to="/calendarview">
              <li className="px-5 pt-4 font-sans text-base font-normal">
                <i className="fa-solid fa-calendar pr-3"></i>
                Calendar View
              </li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}

export default SideBar;
