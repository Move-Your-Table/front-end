import React, { useState } from "react";
import ReservationCard from "./ReservationCard";
import ReservationModal from "../modals/ReservationModal";

const UpcommingReservationsList = ({ reservations, setReservations }) => {
  const [isReservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservation, setReservation] = useState();
  console.log(reservations);

  return (
    <div className="grid grid-cols-2 gap-4">
      {reservations ? (
        reservations.length <= 0 ? (
          <h2>No reservations found</h2>
        ) : (
          reservations.map((reserv) => (
            <ReservationCard
              key={reserv.id}
              reservation={reserv}
              onClickHandler={() => {
                setReservation(reserv);
                setReservationModalOpen(true);
              }}
            />
          ))
        )
      ) : (
        "Loading..."
      )}

      <ReservationModal
        isOpen={isReservationModalOpen}
        handleClose={() => setReservationModalOpen((value) => !value)}
        reservation={reservation}
        setReservations={setReservations}
      ></ReservationModal>
    </div>

    // reservations.map((reserv) => (
    //   <ReservationCard
    //     key={reserv.id}
    //     reservation={reserv}
    //     onClickHandler={() => {
    //       setReservation(reserv);
    //       setReservationModalOpen(true);
    //     }}
    //   />
    // ))
  );
};

export default UpcommingReservationsList;
