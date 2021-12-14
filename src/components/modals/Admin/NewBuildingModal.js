import React, { useState, useEffect } from "react";
import SlideInModal from "../SlideInModal";
import TextInputComponent from "../../Form/TextInputComponent";
import AdminService from "../../../services/AdminService";

const NewBuildingModal = ({ handleClose, isOpen, setBuildings }) => {
  const [buildingName, setbuildingName] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const createBuilding = () => {
    AdminService.createNewBuilding(
      street,
      city,
      postcode,
      country,
      buildingName
    ).then((res) => {
      setBuildings((prev) => [...prev, res]);
      clearForm();
    });
  };

  const clearForm = () => {
    setbuildingName("");
    setCountry("");
    setPostcode("");
    setCity("");
    setStreet("");
    handleClose();
  };

  return (
    <SlideInModal
      handleClose={handleClose}
      isOpen={isOpen}
      title="New Building"
    >
      <TextInputComponent
        label={"Name"}
        placeholder={"Buildign Name"}
        onChange={setbuildingName}
      />

      <TextInputComponent
        label={"Country"}
        placeholder={"Country"}
        onChange={setCountry}
      />
      <TextInputComponent
        label={"Postcode"}
        placeholder={"Postcode"}
        onChange={setPostcode}
      />

      <TextInputComponent
        label={"City"}
        placeholder={"City"}
        onChange={setCity}
      />
      <TextInputComponent
        label={"Street"}
        placeholder={"Street"}
        onChange={setStreet}
      />

      <div className="w-full md:w-1/3 px-3 mb-6 mt-6 flex justify-between">
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
      </div>
    </SlideInModal>
  );
};
export default NewBuildingModal;
