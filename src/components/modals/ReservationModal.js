import React, { useState } from "react";
import SlideInModal from "./SlideInModal";

const ReservationModal = ({ handleClose, isOpen, reservation }) => {
  const [features, setFeatures] = useState([
    "Standing Desk",
    "Beside Window",
    "Desk Lamp",
    "Comfy Chair"
  ]);
  console.log(reservation);

  return (
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
              <span className="font-bold">Type:</span> Burea
            </li>
            <li className="mb-3 mt-3 px-3">
              <span className="font-bold">Date:</span> 8/11/2021
            </li>
            <li className="mb-3 mt-3 px-3">
              <span className="font-bold">Timeslot:</span> 9h00 - 12h30
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
          <span className="text-gray-700 mb-2 inline-block">Textarea</span>
          <textarea
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            rows="3"
            placeholder="Enter some long form content."
          ></textarea>
        </label>
      </div>
    </SlideInModal>
  );
};

export default ReservationModal;
