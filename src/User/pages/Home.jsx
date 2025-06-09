import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../Components/Header'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="banner px-4 md:px-10">
        <br />
        <Header />
        <br />

        <div className="py-10">
          <div className="repair text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Car Repair</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-red-800 font-bold">Services</h1>

            <div className="btn mt-6 flex justify-center">
              <button className="bg-red-800 rounded-full flex items-center justify-center w-40 p-2 text-white">
                <FontAwesomeIcon icon={faPhone} className="text-black text-xl mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left md:m-15">
            <h4 className="text-lg font-medium text-gray-600">About us</h4>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Always Ready To <br /> Our First Priority
            </h1>
            <p className="text-gray-700">
              At GearGuard, we’re more than just a service provider — we’re your trusted roadside companion.
              Whether it's emergency breakdown assistance, routine repairs, or expert detailing services,
              our mission is to keep you moving with confidence.
            </p>
            <p className="text-gray-700">
              Our First Priority is your peace of mind. From the moment you contact us to the moment you're
              back on the road, we ensure quality, transparency, and a customer-first approach.
            </p>

            <button className="mt-4 bg-red-800 text-white px-6 py-2 rounded-full text-lg flex items-center gap-2 mx-auto md:mx-0">
              <FontAwesomeIcon icon={faPhone} className="text-black" />
              Call now
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 ">
            <img
              src="/images/mechanic-holding-digital-tablet.jpg"
              alt="Mechanic"
              className="w-full md:w-[400px] md:h-[450px] mx-auto rounded shadow"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center">

          {/* Left Images */}
          <div className="flex gap-4 ">
            <img
              src="/images/mech_tools.jpg"
              alt="Tools"
              className="md:w-[300px] md:h-[300px]  w-[150px] h=[150px]object-cover rounded shadow"
            />
            <img
              src="/images/mech_repair.jpg"
              alt="Mechanic Working"
              className=" md:w-[300px] md:h-[300px] w-[150px] h=[150px] object-cover rounded shadow"
            />
          </div>

          {/* Right Text */}
          <div className="flex">
            <h1 className="text-6xl font-bold">12</h1>
            <p className="text-xl font-medium mt-2">Years of<br />Experience</p>
          </div>

        </div>
      </section>

      <section className="bg-black text-white px-4 md:px-16 py-16 text-center">
        {/* Title and Description */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
          We provide reliable and efficient automotive support services designed to keep you safe and your vehicle in top condition.
          Our offerings include emergency breakdown assistance for on-the-spot help during unexpected situations, expert repair and
          maintenance services to ensure long-term vehicle health, professional detailing to restore your car’s look and feel, and
          preventive care to catch issues before they become costly problems. With a team that’s always ready to respond, your safety
          and peace of mind are our first priority.
        </p>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src="/images/breakdown assistance.png" alt="Breakdown" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium">Breakdown<br />Assistance</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src="/images/Repair and service.png" alt="Repair" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium">Repair and<br />Services</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src="/images/Other services.png" alt="Other Services" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium">Other<br />Services</p>
          </div>
        </div>

        {/* Bottom Text */}
        <h3 className="text-2xl md:text-3xl font-semibold">
          DEAL WITH<br />
          <span className="text-red-700 font-bold text-3xl md:text-4xl">EVERY BRAND</span>
        </h3>
      </section>








    </>
  );
}

export default Home;
