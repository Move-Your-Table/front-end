import React, { useState, useEffect } from "react";
import SlideInModal from "../SlideInModal";

const NewBuildingModal = ({ handleClose, isOpen }) => {
  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="New Building"
    >
      test
    </SlideInModal>
  );
};
export default NewBuildingModal;
