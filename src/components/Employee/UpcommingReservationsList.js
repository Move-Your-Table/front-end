import React from "react";
import ReservationCard from "./ReservationCard";

const UpcommingReservationsList = ({ reservations }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {reservations.map((reserv) => (
        <ReservationCard reservation={reserv} />
      ))}
    </div>
  );
};

export default UpcommingReservationsList;
