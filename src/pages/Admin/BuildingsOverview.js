import React, { useState, useEffect } from "react";
import { TableComponent } from "../../components/Admin/TableComponent";
import AdminService from "../../services/AdminService";
import AdminNavigation from "../../components/Navigation/AdminNavigation";
import { SearchComponent } from "../../components/Form/SearchComponent";

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

  useEffect(() => {
    AdminService.getBuildings().then((res) => {
      setbuildingsJson(formatJson(res));
    });
  }, []);

  function formatJson(res) {
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
  }
  const filterBuilding = (item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(searchString.toLowerCase());
  };

  return (
    <div className="container mx-auto px-4 ">
      <AdminNavigation />
      <div className="container flex flex-col gap-10">
        <div>
          <h1 className="text-xl mb-4">Buildings</h1>
          <SearchComponent onChangeFunction={setSearchString} />
        </div>

        {buildingsJson !== null ? (
          <TableComponent
            headers={headers}
            data={buildingsJson.filter(filterBuilding)}
            onDelete={() => {
              console.log("test");
            }}
            onEdit={() => {
              console.log("Edit");
            }}
          />
        ) : (
          <h2>Loading..</h2>
        )}
      </div>
    </div>
  );
};

export default BuildingsOverview;
