import React, { useState, useEffect } from "react";
import { TableComponent } from "../../components/Admin/TableComponent";
import AdminService from "../../services/AdminService";

const BuildingsOverview = () => {
  const headers = [
    "Number",
    "Building Name",
    "Total rooms",
    "Total desks",
    "Location"
  ];
  const [buildingsJson, setbuildingsJson] = useState(null);

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

  return (
    <div className="container mx-auto px-4 ">
      <h1>Test</h1>
      {buildingsJson !== null ? (
        <TableComponent headers={headers} data={buildingsJson} />
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default BuildingsOverview;
