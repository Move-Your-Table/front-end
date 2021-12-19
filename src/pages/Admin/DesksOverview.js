import React, { useState, useEffect } from "react";
import NewDeskModal from "../../components/modals/Admin/NewDeskModal";
import AdminNavigation from "../../components/Navigation/AdminNavigation";
import SelectComponent from "../../components/Form/SelectComponent";
import { TableComponent } from "../../components/Admin/TableComponent";
import AdminService from "../../services/AdminService";
import EmployeeService from "../../services/EmployeeService";

const DesksOverview = () => {
  const headers = ["Name", "Type"];
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [deskJson, setDeskJson] = useState(null);

  const [buildings, SetBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(-1);

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(-1);

  const formatJson = (res) => {
    let newArray = [];
    res.map((item) => {
      newArray.push({
        name: item.name ? item.name : item.deskName,
        type: item.type
      });
    });
    return newArray;
  };

  useEffect(() => {
    AdminService.getBuildings().then((res) => {
      SetBuildings(res);
    });
  }, []);

  useEffect(() => {
    if (selectedBuilding !== -1) {
      AdminService.getRooms(selectedBuilding).then((res) => setRooms(res));
      setSelectedRoom(-1);
    }
  }, [selectedBuilding]);

  useEffect(() => {
    if (selectedRoom !== -1 && selectedBuilding !== -1) {
      fetchDesks();
    }
  }, [selectedRoom]);

  const fetchDesks = () => {
    EmployeeService.getDesks(selectedBuilding, selectedRoom)
      .then((res) => setDeskJson(res))
      .catch(() => setDeskJson([]));
  };

  return (
    <div className="container mx-auto px-4 ">
      <AdminNavigation />
      <div className="container flex flex-col gap-10">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl">Desks</h1>
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
          <SelectComponent
            title="Room"
            options={rooms}
            selected={selectedRoom}
            setSelected={setSelectedRoom}
            isDisabled={selectedBuilding !== -1 ? false : true}
            nameKey={"roomName"}
          />
        </div>

        {deskJson !== null ? (
          <TableComponent
            headers={headers}
            data={formatJson(deskJson)}
            onDelete={(desk) => {
              AdminService.removeDesk(
                selectedBuilding,
                selectedRoom,
                desk.name
              ).then(() => fetchDesks());
            }}
          />
        ) : (
          <h2>Select a building and room</h2>
        )}
      </div>

      <NewDeskModal
        isOpen={isCreateModalOpen}
        handleClose={() => setCreateModalOpen((value) => !value)}
        setDesks={setDeskJson}
      />
    </div>
  );
};

export default DesksOverview;
