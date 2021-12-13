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

          <div>
            <label className="block text-left font-bold">
              <span className="text-gray-700 mb-2 inline-block">
                Have a problem to report?
              </span>
              <textarea
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                rows="4"
                rows="3"
                placeholder="Type something here"
              ></textarea>
            </label>
          </div>
        </SlideInModal>
      )}
    </>
  );
};

export default ReservationModal;
