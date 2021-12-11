import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import DateTimeComponent from "../Form/DateTimeComponent";
import SelectComponent from "../Form/SelectComponent";
import SlideInModal from "./SlideInModal";
import ReservationOverview from "../Employee/ReservationOverview";
import { ErrorMessageComponent } from "../Form/ErrorMessageComponent";

const NewReservationModal = ({ handleClose, isOpen }) => {
  const [rooms, setRooms] = useState([]);
  const [buildings, setbuildings] = useState([]);
  const [desks, setDesks] = useState([]);

  const [selectedBuilding, setSelectedBuilding] = useState(-1);
  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedDesk, setSelectedDesk] = useState(-1);

  const [deskInfo, setDeskInfo] = useState(null);

  const now = new Date();
  now.setMinutes(0);
  const [startDate, setStartDate] = useState(now.setHours(9));
  const [endDate, setEndDate] = useState(now.setHours(16));

  const [isValidTime, setIsValidTime] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    EmployeeService.getBuildings().then((res) => setbuildings(res));
  }, []);

  useEffect(() => {
    if (selectedBuilding >= 0) {
      EmployeeService.getRooms(selectedBuilding).then((res) => setRooms(res));
      setDeskInfo(null);
      setSelectedRoom(-1);
    }
  }, [selectedBuilding]);

  useEffect(() => {
    if (selectedRoom >= 0 && selectedBuilding >= 0) {
      EmployeeService.getDesks(selectedBuilding, selectedRoom).then((res) =>
        setDesks(res)
      );
      setDeskInfo(null);
      setSelectedDesk(-1);
    }
  }, [selectedRoom]);

  useEffect(() => {
    if (selectedDesk >= 0) {
      setDeskInfo(desks[selectedDesk]);
    }
  }, [selectedDesk]);

  useEffect(() => {
    if (deskInfo && deskInfo.reservations.length > 0) {
      deskInfo.reservations.map((res) => {
        const start1 = new Date(res.endTime);
        const end1 = new Date(res.startTime);
        if (start1 <= endDate && startDate <= end1) {
          setIsValidTime(false);
          setErrorMsg(
            "Overlapping reservation on",
            `${start1.getHours()}:${start1.getMinutes()}`,
            `${end1.getHours()}:${end1.getMinutes()}`
          );
        } else {
          setIsValidTime(true);
        }
      });
    }
  }, [startDate, endDate, deskInfo]);

  function makeReservation() {}

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

      <DateTimeComponent
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      ></DateTimeComponent>

      <ErrorMessageComponent showing={!isValidTime} message={errorMsg} />

      {deskInfo && selectedRoom >= 0 && selectedBuilding >= 0 && (
        <ReservationOverview
          desk={deskInfo.name}
          room={rooms[selectedRoom].name}
          building={buildings[selectedBuilding].name}
          date={"29/12"}
        />
      )}

      <div className="w-full md:w-1/3 px-3 mb-6 mt-6 flex justify-between">
        <button
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={makeReservation}
          disabled={!(deskInfo && isValidTime)}
        >
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
