import React from "react";
import Navigation from "../components/Navigation/Navigation";
import userImage from "../assets/user.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="container mx-auto px-4 ">
      <Navigation></Navigation>

      <div>
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  font-extrabold leading-tight">
              Move your table
            </h1>
            <p className="mt-5 sm:mt-10 font-normal text-center text-lg sm:text-lg">
              Choose where you work, at your pace
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="admin/buildings"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Admin
            </Link>
            <Link
              to="/employee"
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4  rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5  mt-4">Lennert</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Olivia featured Image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 mt-4">Adriaan</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Liam featued Image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Liam featued Image"
              />
              <p className="font-medium text-xl leading-5  mt-4">Steffen</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5  mt-4">Kjell</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5  mt-4">Bo</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src={userImage}
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src={userImage}
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5 mt-4">Tijl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
