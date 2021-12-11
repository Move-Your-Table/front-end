import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import DateComponent from "../Form/DateComponent";
import SelectComponent from "../Form/SelectComponent";
import SlideInModal from "./SlideInModal";
import ReservationOverview from "../Employee/ReservationOverview";

const NewReservationModal = ({ handleClose, isOpen }) => {
  const [rooms, setRooms] = useState([]);
  const [buildings, setbuildings] = useState([]);
  const [desks, setDesks] = useState([]);

  const [selectedBuilding, setSelectedBuilding] = useState(-1);
  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedDesk, setSelectedDesk] = useState(-1);

  const [deskInfo, setDeskInfo] = useState(null);

  const [startDate, setStartDate] = useState(new Date("08/12/2021 9:00"));
  const [endDate, setEndDate] = useState(new Date("08/12/2021 16:00"));

  useEffect(() => {
    EmployeeService.getBuildings().then((res) => setbuildings(res));
  }, []);

  useEffect(() => {
    console.log(selectedBuilding);
    if (selectedBuilding >= 0) {
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

  useEffect(() => {
    if (selectedDesk >= 0) {
      setDeskInfo(desks[selectedDesk]);
      console.log(desks[selectedDesk]);
    }
  }, [selectedDesk]);

  useEffect(() => {
    if (deskInfo && deskInfo.reservations.length > 0) {
      deskInfo.reservations.map((res) => {
        const start1 = new Date(res.endTime);
        const end1 = new Date(res.startTime);
        if (start1 <= endDate && startDate <= end1) {
          console.log(
            "Overlapping reservation on",
            `${start1.getHours()}:${start1.getMinutes()}`,
            `${end1.getHours()}:${end1.getMinutes()}`
          );
        }
      });
    }
  }, [startDate, endDate]);

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

      <DateComponent
        title="Date"
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      ></DateComponent>

      {deskInfo && (
        <ReservationOverview
          desk={deskInfo.name}
          room={rooms[selectedRoom].name}
          building={buildings[selectedBuilding].name}
          date={"29/12"}
        />
      )}

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
