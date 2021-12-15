import React, { useState, useEffect } from "react";
import SlideInModal from "../SlideInModal";
import SelectComponent from "../../Form/SelectComponent";
import AdminService from "../../../services/AdminService";
import TextInputComponent from "../../Form/TextInputComponent";
import NumberInputComponent from "../../Form/NumberInputComponent";

const NewRoomModal = ({ handleClose, isOpen }) => {
  const [buildings, SetBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(-1);

  const [roomName, setRoomName] = useState("");
  const [type, setType] = useState("Room");
  const [features, setFeatures] = useState([""]);
  const [capacity, setCapacity] = useState(1);
  const [floor, setFloor] = useState(0);

  const createRoom = () => {
    AdminService.createNewBuilding(
      street,
      city,
      postcode,
      country,
      buildingName
    ).then((res) => {
      clearForm();
    });
  };

  const clearForm = () => {
    SetBuildings("");
    setSelectedBuilding(-1);
    setRoomName("");
    setFeatures([""]);
    setCapacity(1);
    setFloor(0);
    handleClose();
  };

  useEffect(() => {
    AdminService.getBuildings().then((res) => SetBuildings(res));
  }, []);

  return (
    <SlideInModal handleClose={handleClose} isOpen={isOpen} title="New Room">
      <SelectComponent
        title="Building"
        options={buildings}
        selected={selectedBuilding}
        setSelected={setSelectedBuilding}
      />
      <TextInputComponent
        label={"Name"}
        placeholder={"Room Name"}
        onChange={setRoomName}
      />
      {features.map((f, i) => {
        return (
          <div className="flex" key={i}>
            <TextInputComponent
              label={`Feature ${i}`}
              placeholder={"Feature"}
              onChange={(data) =>
                setFeatures((prev) => {
                  prev[i] = data;
                  return [...prev];
                })
              }
              value={f}
            />
            {i > 0 && (
              <span
                className="self-end mb-6 text-2xl text-red-700 font-bold"
                onClick={() => {
                  console.log("ddd");
                  setFeatures((prev) => {
                    prev.splice(i, 1);
                    return [...prev];
                  });
                }}
              >
                x
              </span>
            )}
          </div>
        );
      })}
      <span
        className="w-full md:w-1/3 px-3 mb-6 mt-2"
        onClick={() => setFeatures((prev) => [...prev, ""])}
      >
        Add new feature
      </span>

      <NumberInputComponent
        label={"Capacity"}
        placeholder={"Room capacity"}
        onChange={setCapacity}
      />
      <NumberInputComponent
        label={"Floor"}
        placeholder={"Floor"}
        onChange={setFloor}
      />

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
