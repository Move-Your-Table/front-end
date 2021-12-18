import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import DateTimeComponent from "../Form/DateTimeComponent";
import SelectComponent from "../Form/SelectComponent";
import SlideInModal from "./SlideInModal";
import ReservationOverview from "../Employee/ReservationOverview";
import { ErrorMessageComponent } from "../Form/ErrorMessageComponent";

const NewReservationModal = ({ handleClose, isOpen, setReservations }) => {
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
    console.log(buildings);
  }, []);

  useEffect(() => {
    if (selectedBuilding !== -1) {
      EmployeeService.getRooms(selectedBuilding)
        .then((res) => setRooms(res))
        .catch(() => {
          console.log("Could not fetch rooms");
        });
      setDeskInfo(null);
      setSelectedRoom(-1);
    }
  }, [selectedBuilding]);

  useEffect(() => {
    if (selectedRoom !== -1 && selectedBuilding !== -1) {
      EmployeeService.getDesks(selectedBuilding, selectedRoom)
        .then((res) => setDesks(res))
        .catch(() => {
          console.log("Could not fetch desks");
        });
      setDeskInfo(null);
      setSelectedDesk(-1);
    }
  }, [selectedRoom]);

  useEffect(() => {
    if (selectedDesk !== -1) {
      setDeskInfo(desks.find((desk) => desk.name === selectedDesk));
    }
  }, [selectedDesk]);

  function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
    if (b_start < a_start && a_end < b_end) return true; // a in b
    return false;
  }

  useEffect(() => {
    if (deskInfo && deskInfo.reservations.length > 0) {
      deskInfo.reservations.map((res) => {
        const start1 = new Date(res.startTime);
        const end1 = new Date(res.endTime);

        if (start1 <= endDate && startDate <= end1) {
          console.log("Overlpaaing");
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

  const makeReservation = () => {
    EmployeeService.makeNewReservation(
      selectedBuilding,
      selectedRoom,
      selectedDesk,
      startDate,
      endDate
    )
      .then((res) => {
        setReservations((prev) => [res, ...prev]);
        resetForm();
      })
      .catch((err) => console.log("failed", err));
  };

  const resetForm = () => {
    setDeskInfo(null);
    setSelectedRoom(-1);
    setSelectedBuilding(-1);
    setSelectedDesk(-1);
    handleClose();
  };

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
        isDisabled={selectedBuilding !== -1 ? false : true}
        nameKey={"roomName"}
      />

      <SelectComponent
        title="Desk"
        options={desks}
        selected={selectedDesk}
        setSelected={setSelectedDesk}
        isDisabled={
          selectedRoom !== -1 && selectedBuilding !== -1 ? false : true
        }
      />

      <DateTimeComponent
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      ></DateTimeComponent>

      <ErrorMessageComponent showing={!isValidTime} message={errorMsg} />

      {deskInfo && selectedRoom !== -1 && selectedBuilding !== -1 && (
        <ReservationOverview
          desk={selectedDesk}
          room={selectedRoom}
          building={buildings.find((b) => b.id === selectedBuilding).name}
          date={"29/12"}
          //features={deskInfo.features}
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
