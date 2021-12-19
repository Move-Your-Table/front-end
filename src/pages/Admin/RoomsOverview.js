import React, { useState, useEffect } from "react";
import NewRoomModal from "../../components/modals/Admin/NewRoomModal";
import AdminNavigation from "../../components/Navigation/AdminNavigation";
import SelectComponent from "../../components/Form/SelectComponent";
import AdminService from "../../services/AdminService";
import { TableComponent } from "../../components/Admin/TableComponent";

const RoomsOverview = () => {
  const headers = ["Name", "Type", "Used capacity"];
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [buildings, SetBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(-1);

  const [searchString, setSearchString] = useState("");

  const [roomsJson, setRoomsJson] = useState(null);

  const formatJson = (res) => {
    console.log(res);
    let newArray = [];
    res.map((item) => {
      newArray.push({
        name: item.roomName,
        type: item.type,
        capacity: item.capacity
      });
    });
    return newArray;
  };

  const filterRooms = (item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(searchString.toLowerCase());
  };

  useEffect(() => {
    AdminService.getBuildings().then((res) => {
      SetBuildings(res);
    });
  }, []);

  useEffect(() => {
    if (selectedBuilding !== -1) {
      fetchRooms();
    }
  }, [selectedBuilding]);

  const fetchRooms = () => {
    AdminService.getRooms(selectedBuilding)
      .then((res) => setRoomsJson(res))
      .catch(() => setRoomsJson([]));
  };

  return (
    <div className="container mx-auto px-4 ">
      <AdminNavigation />
      <div className="container flex flex-col gap-10">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl">Rooms</h1>
            <button
              className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
              onClick={() => setCreateModalOpen((value) => !value)}
            >
              Create +
            </button>
          </div>
        </div>

        <div className="flex text-white">
          <SelectComponent
            title="Building"
            options={buildings}
            selected={selectedBuilding}
            setSelected={setSelectedBuilding}
          />
        </div>
        {roomsJson !== null ? (
          <TableComponent
            headers={headers}
            data={formatJson(roomsJson)}
            onDelete={(room) => {
              AdminService.removeRoom(selectedBuilding, room.name).then(() =>
                fetchRooms()
              );
            }}
          />
        ) : (
          <h2>Select building</h2>
        )}
      </div>

      <NewRoomModal
        isOpen={isCreateModalOpen}
        handleClose={() => setCreateModalOpen((value) => !value)}
        setRooms={setRoomsJson}
      />
    </div>
  );
};

export default RoomsOverview;
