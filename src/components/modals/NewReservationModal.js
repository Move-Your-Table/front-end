import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import DateComponent from "../Form/DateComponent";
import SelectComponent from "../Form/SelectComponent";
import SlideInModal from "./SlideInModal";

const NewReservationModal = ({ handleClose, isOpen }) => {
  const [features, setFeatures] = useState([
    "Standing Desk",
    "Beside Window",
    "Desk Lamp",
    "Comfy Chair"
  ]);

  const [rooms, setRooms] = useState([]);
  const [buildings, setbuildings] = useState([]);
  const [desks, setDesks] = useState([]);

  const [selectedBuilding, setSelectedBuilding] = useState(-1);
  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedDesk, setSelectedDesk] = useState(-1);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    EmployeeService.getBuildings().then((res) => setbuildings(res));
  }, []);

  useEffect(() => {
    console.log(selectedBuilding);
    if (selectedBuilding) {
      EmployeeService.getRooms(selectedBuilding).then((res) => setRooms(res));
    }
  }, [selectedBuilding]);

  useEffect(() => {
    if (selectedRoom >= 0 && selectedBuilding >= 0) {
      EmployeeService.getDesks(selectedBuilding, selectedRoom).then((res) =>
        setDesks(res)
      );
    }
  }, [selectedRoom]);

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
        options={rooms}
        selected={selectedRoom}
        setSelected={setSelectedRoom}
        isDisabled={selectedBuilding >= 0 ? false : true}
      />

      <SelectComponent
        title="Desk"
        options={desks}
        selected={selectedDesk}
        setSelected={setSelectedDesk}
        isDisabled={selectedRoom >= 0 && selectedBuilding >= 0 ? false : true}
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
          {features.map((feature, i) => {
            return <li key={i}>{feature}</li>;
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
