import React, { useState } from "react";
import UpcommingReservationsList from "../components/Employee/UpcommingReservationsList";
import SlideInModal from "../components/modals/SlideInModal";
import EmployeeNavigation from "../components/Navigation/EmployeeNavigation";

const EmployeeDasboard = () => {
  const [reservationsJson, setReservationsJson] = useState([
    {
      id: 1,
      name: "test",
      timeSlot: "13h30 - 12h30",
      location: "1st floor in the Spire",
    },
    {
      id: 2,
      name: "test 2",
      timeSlot: "9h00 - 12h30",
      location: "1st floor in the Spire",
    },
  ]);

  return (
    <div className="container mx-auto px-4 ">
      <EmployeeNavigation />
      <div className="container flex flex-col lg:flex-row gap-10">
        <div className="flex flex-1 flex-col">
          <h2 className="mb-8 text-xl">Upcomming reservations</h2>
          <UpcommingReservationsList reservations={reservationsJson} />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="mb-8 text-xl">Past reservations</h2>
          <UpcommingReservationsList reservations={reservationsJson} />
        </div>
      </div>
      <SlideInModal isOpen={true}>
        <h1>sefse</h1>
      </SlideInModal>
    </div>
  );
};

export default EmployeeDasboard;
