import React, { useState, useEffect } from "react";
import { TableComponent } from "../../components/Admin/TableComponent";
import AdminService from "../../services/AdminService";
import AdminNavigation from "../../components/Navigation/AdminNavigation";
import NewBuildingModal from "../../components/modals/Admin/NewBuildingModal";
import SearchComponent from "../../components/Form/SearchComponent";

const BuildingsOverview = () => {
  const headers = [
    "Number",
    "Building Name",
    "Total rooms",
    "Total desks",
    "Location"
  ];
  const [buildingsJson, setbuildingsJson] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const fetchBuildings = () => {
    AdminService.getBuildings().then((res) => {
      setbuildingsJson(formatJson(res));
    });
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  const formatJson = (res) => {
    let newArray = [];
    res.map((item) => {
      newArray.push({
        id: item.id,
        name: item.name,
        totalRooms: item.rooms.total,
        totalDesks: item.desks.total,
        location: `${item.street}, ${item.postcode} ${item.city}, ${item.country}`
      });
    });
    return newArray;
  };

  const filterBuilding = (item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(searchString.toLowerCase());
  };

  return (
    <div className="container mx-auto px-4 ">
      <AdminNavigation />
      <div className="container flex flex-col gap-10">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl">Buildings</h1>
            <button
              className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
              onClick={() => setCreateModalOpen((value) => !value)}
            >
              Create +
            </button>
          </div>

          <SearchComponent onChangeFunction={setSearchString} />
        </div>

        {buildingsJson !== null ? (
          <TableComponent
            headers={headers}
            data={buildingsJson.filter(filterBuilding)}
            onDelete={(building) => {
              AdminService.removeBuilding(building.id).then((r) =>
                fetchBuildings()
              );
            }}
            onEdit={() => {
              console.log("Edit");
            }}
          />
        ) : (
          <h2>Loading..</h2>
        )}
      </div>

      <NewBuildingModal
        isOpen={isCreateModalOpen}
        handleClose={() => setCreateModalOpen((value) => !value)}
      />
    </div>
  );
};

export default BuildingsOverview;
