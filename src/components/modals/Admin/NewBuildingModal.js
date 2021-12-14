import React, { useState, useEffect } from "react";
import SlideInModal from "../SlideInModal";
import TextInputComponent from "../../Form/TextInputComponent";

const NewBuildingModal = ({ handleClose, isOpen }) => {
  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="New Building"
    >
      <TextInputComponent title={"test"} />
    </SlideInModal>
  );
};
export default NewBuildingModal;
