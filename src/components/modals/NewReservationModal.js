import React, { useState } from "react";
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
    </SlideInModal>
  );
};

export default NewReservationModal;
