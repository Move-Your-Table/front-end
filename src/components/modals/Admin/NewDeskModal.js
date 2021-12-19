import React, { useEffect, useState } from "react";
import SlideInModal from "../SlideInModal";
import TextInputComponent from "../../Form/TextInputComponent";
import NumberInputComponent from "../../Form/NumberInputComponent";
import AdminService from "../../../services/AdminService";
import SelectComponent from "../../Form/SelectComponent";

const NewDeskModal = ({ handleClose, isOpen, setDesks }) => {
  const [buildings, SetBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(-1);

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(-1);

  const [deskName, setDeskName] = useState("");
  const [type, setType] = useState("Desk");
  const [features, setFeatures] = useState([""]);
  const [capacity, setCapacity] = useState(1);
  const [floor, setFloor] = useState(0);

  useEffect(() => {
    AdminService.getBuildings().then((res) => SetBuildings(res));
  }, []);

  useEffect(() => {
    if (selectedBuilding !== -1) {
      AdminService.getRooms(selectedBuilding)
        .then((res) => setRooms(res))
        .catch(() => {
          console.log("Error could not fetch rooms");
        });
      setSelectedRoom(-1);
    }
  }, [selectedBuilding]);

  const createDesk = () => {
    AdminService.createNewDesk(
      selectedBuilding,
      selectedRoom,
      deskName,
      type,
      features,
      capacity,
      floor
    )
      .then((res) => {
        setDesks((prev) => [...prev, res]);
        clearForm();
      })
      .catch(() => clearForm());
  };

  const clearForm = () => {
    setSelectedBuilding(-1);
    setDeskName("");
    setFeatures([""]);
    setCapacity(1);
    setFloor(0);
    handleClose();
  };

  return (
    <SlideInModal handleClose={handleClose} isOpen={isOpen} title="New Desk">
      <SelectComponent
        title="Building"
        options={buildings}
        selected={selectedBuilding}
        setSelected={setSelectedBuilding}
      />
      <SelectComponent
        title="Room"
        options={rooms}
        selected={selectedRoom}
        setSelected={setSelectedRoom}
        isDisabled={selectedBuilding !== -1 ? false : true}
        nameKey={"roomName"}
      />
      <TextInputComponent
        label={"Name"}
        placeholder={"Desk Name"}
        onChange={setDeskName}
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
        placeholder={"Desk capacity"}
        onChange={setCapacity}
      />
      <div className="w-full md:w-1/3 px-3 mb-6 mt-6 flex justify-between">
        <button
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={createDesk}
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

export default NewDeskModal;
