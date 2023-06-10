import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineUserGroup } from "react-icons/hi";
import { MdLibraryBooks, MdOutlineManageAccounts, MdPayment } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

import { AiFillBook, AiOutlineBook } from "react-icons/ai";
import {  FiFolder } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Home = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();


  const isAuthenticated = true; 

 
  if (!isAuthenticated) {
    navigate("/login"); 
    return null; 
  }

  const removeHeaderFooter = location.pathname.includes("dashboard");
  const menus = [
    { name: "Payment", link: "/", icon: MdPayment },
    { name: "My Selected Classes", link: "selectedclasses", icon: AiOutlineBook },
    { name: "My Enrolled Classes", link: "enrolledclasses", icon: MdLibraryBooks },
    { name: "Add Class", link: "/", icon: AiFillBook, margin: true },
    { name: "My Classes", link: "/", icon: FiFolder },
    { name: "Total Enrolled Student", link: "/", icon: HiOutlineUserGroup },
    { name: "Manage Classes", link: "/", icon: MdOutlineManageAccounts, margin: true },
    { name: "Manage User", link: "/", icon: RiSettings4Line },
  ];

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        MELODY SCHOOL
      </div>
      <div>
        {removeHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {removeHeaderFooter || <Footer></Footer>}
      </div>
    </section>
  );
};

export default Home;
