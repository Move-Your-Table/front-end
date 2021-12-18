import React, { useEffect, useState } from "react";
import SlideInModal from "../SlideInModal";

const NewDeskModal = ({ handleClose, isOpen }) => {
  const [buildings, SetBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(-1);
  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="New Desk"
    ></SlideInModal>
  );
};

export default NewDeskModal;
