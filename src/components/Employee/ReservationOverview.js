import React, { useState } from "react";
import TimeFormater from "../util/TimeFormater";
const ReservationOverview = ({
  desk,
  room,
  building,
  startDate,
  endDate,
  features
}) => {
  return (
    <>
      {true && (
        <div>
          <div className="w-full md:w-10/12 px-3 mb-6 md:mb-0 mt-6">
            <h3 className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm">
              Reservation Overview
            </h3>
            <div className="flex">
              <img
                className="w-1/3"
                alt="Desk"
                src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <ul>
                <li className="mb-3 px-3">
                  <span className="font-bold">Desk:</span> {desk}
                </li>
                <li className="mb-3 mt-3 px-3">
                  <span className="font-bold">Room:</span> {room}
                </li>
                <li className="mb-3 mt-3 px-3">
                  <span className="font-bold">Building:</span> {building}
                </li>
                <li className="mb-3 mt-3 px-3">
                  <span className="font-bold">Date:</span>{" "}
                  {TimeFormater.formatDate(startDate)}:{" "}
                  {TimeFormater.formatTime(startDate, endDate)}
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-6">
            <h4 className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm ">
              Features
            </h4>
            <ul className="list-disc px-6">
              {/* {features.map((feature, i) => {
                return <li key={i}>{feature}</li>;
              })} */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationOverview;
