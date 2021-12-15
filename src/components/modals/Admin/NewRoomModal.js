import React, { useState, useEffect } from "react";
import SlideInModal from "../SlideInModal";
import TextInputComponent from "../../Form/TextInputComponent";
import AdminService from "../../../services/AdminService";

const NewRoomModal = ({ handleClose, isOpen }) => {
  return (
    <SlideInModal handleClose={handleClose} isOpen={isOpen} title="New Room">
      F
      {/* <div className="w-full md:w-1/3 px-3 mb-6 mt-6 flex justify-between">
        <button
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={createBuilding}
        >
          Create
        </button>
        <button
          className="text-white hover:bg-blue-700 font-bold py-1 px-4 rounded-full bg-red-600"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div> */}
    </SlideInModal>
  );
};

export default NewRoomModal;
