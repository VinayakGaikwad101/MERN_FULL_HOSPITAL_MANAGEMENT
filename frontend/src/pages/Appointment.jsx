import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Siddhivinayak Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
      <Footer/>
    </>
  );
};

export default Appointment;
