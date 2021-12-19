import React, { useState, useEffect } from "react";
import SlideInModal from "./SlideInModal";
import TimeFormater from "../util/TimeFormater";
import EmployeeService from "../../services/EmployeeService";

const ReservationModal = ({ handleClose, isOpen, reservation }) => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    if (reservation) {
      EmployeeService.getDesk(
        reservation.building.id,
        reservation.room.id,
        reservation.desk.id
      ).then((res) => setFeatures(res.features));
    }
  }, [reservation]);

  return (
    <>
      {reservation && (
        <SlideInModal
          handleClose={handleClose}
          isOpen={isOpen}
          title="Reservation info"
        >
          <img
            className="w-full object-cover h-80 object-bottom mb-10"
            src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Sunset in the mountains"
          />

          <div className="flex w-full mb-10">
            <div className="mr-32">
              <ul>
                <li className="mb-3 px-3">
                  <span className="font-bold">Type:</span> Desk
                </li>
                <li className="mb-3 mt-3 px-3">
                  <span className="font-bold">Date:</span>{" "}
                  {TimeFormater.formatDate(reservation.startTime)}
                </li>
                <li className="mb-3 mt-3 px-3">
                  <span className="font-bold">Timeslot:</span>{" "}
                  {TimeFormater.formatTime(
                    reservation.startTime,
                    reservation.endTime
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Features</h4>
              <ul className="list-disc px-6">
                {features.map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 mt-6 flex justify-between">
            <button
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => console.log(reservation.id)}
            >
              Cancel Reservation
            </button>
          </div>
        </SlideInModal>
      )}
    </>
  );
};

export default ReservationModal;
