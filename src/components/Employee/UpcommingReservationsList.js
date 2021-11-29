import React, { useState } from "react";
import ReservationCard from "./ReservationCard";
import ReservationModal from "../modals/ReservationModal";

const UpcommingReservationsList = ({ reservations }) => {
  const [isReservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservation, setReservation] = useState();

  return (
    <div className="grid grid-cols-2 gap-4">
      {reservations.map((reserv) => (
        <ReservationCard
          key={reserv.id}
          reservation={reserv}
          onClickHandler={() => {
            setReservation(reserv);
            setReservationModalOpen(true);
          }}
        />
      ))}

      <ReservationModal
        isOpen={isReservationModalOpen}
        handleClose={() => setReservationModalOpen((value) => !value)}
        reservation={reservation}
      ></ReservationModal>
    </div>
  );
};

export default UpcommingReservationsList;
