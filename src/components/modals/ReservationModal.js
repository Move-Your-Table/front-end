import React from "react";
import SlideInModal from "./SlideInModal";

const ReservationModal = ({ handleClose, isOpen, reservation }) => {
  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="Reservation info"
    >
      {reservation && (
        <>
          <h1>{reservation.id}</h1>
          <h1>{reservation.name}</h1>
        </>
      )}
    </SlideInModal>
  );
};

export default ReservationModal;
