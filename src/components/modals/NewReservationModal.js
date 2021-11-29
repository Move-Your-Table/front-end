import React, { useState } from "react";
import DateComponent from "../Form/DateComponent";
import SelectComponent from "../Form/SelectComponent";
import SlideInModal from "./SlideInModal";

const NewReservationModal = ({ handleClose, isOpen }) => {
  const [buildings, setBuildings] = useState([
    {
      id: 1,
      name: "Building A",
    },
    {
      id: 2,
      name: "Building B",
    },
  ]);

  const [selectedBuilding, setSelectedBuilding] = useState(2);

  const [date, setDate] = useState(new Date());
  const [features, setFeatures] = useState([
    "Standing Desk",
    "Beside Window",
    "Desk Lamp",
    "Comfy Chair",
  ]);

  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="New Reservation"
    >
      <SelectComponent
        title="Building"
        options={buildings}
        selected={selectedBuilding}
        setSelected={setSelectedBuilding}
      />

      <SelectComponent
        title="Room"
        options={buildings}
        selected={selectedBuilding}
        setSelected={setSelectedBuilding}
      />

      <SelectComponent
        title="Desk"
        options={buildings}
        selected={selectedBuilding}
        setSelected={setSelectedBuilding}
      />

      <DateComponent title="Date" date={date} setDate={setDate}></DateComponent>

      <div className="w-full md:w-10/12 px-3 mb-6 md:mb-0 mt-6">
        <h3>Reservation Overview</h3>
        <div className="flex">
          <img
            className="w-1/3"
            src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <ul>
            <li className="mb-3 px-3">
              <span className="font-bold">Desk:</span> D.1002
            </li>
            <li className="mb-3 mt-3 px-3">
              <span className="font-bold">Room:</span> Workspace 1
            </li>
            <li className="mb-3 mt-3 px-3">
              <span className="font-bold">Building:</span> The Spire
            </li>
            <li className="mb-3 mt-3 px-3">
              <span className="font-bold">Date:</span> 22/11/21 between 9h00 -
              12h30
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-6">
        <h4>Features</h4>
        <ul className="list-disc px-6">
          {features.map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
      </div>
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-6 flex justify-between">
        <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
          Create
        </button>
        <button className="text-white hover:bg-blue-700 font-bold py-1 px-4 rounded-full bg-red-600">
          Cancel
        </button>
      </div>
    </SlideInModal>
  );
};

export default NewReservationModal;
