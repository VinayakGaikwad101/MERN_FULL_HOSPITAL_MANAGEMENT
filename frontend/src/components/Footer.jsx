import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 5:00 PM" },
    { id: 2, day: "Tuesday", time: "10:00 AM - 6:00 PM" },
    { id: 3, day: "Wednesday", time: "11:00 AM - 7:00 PM" },
    { id: 4, day: "Thursday", time: "12:00 PM - 8:00 PM" },
    { id: 5, day: "Friday", time: "1:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "2:00 PM - 10:00 PM" },
  ];

  return (
    <footer className="container">
      <hr />
      <div className="content">
        <div>
          <h2>Quick Links</h2>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          {hours.map((element) => {
            return (
              <li key={element.id}>
                <span>{element.day} =&gt; </span>
                <span>{element.time} </span>
              </li>
            );
          })}
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>999-999-9999</span>
          </div>
          <div>
            <MdEmail />
            <span>vinaayakgaikwad@gmail.com</span>
          </div>
          <div>
            <FaLocationArrow />
            <span>Nanded, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
