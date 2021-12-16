import React, { useState } from "react";
import NewDeskModal from "../../components/modals/Admin/NewDeskModal";
import AdminNavigation from "../../components/Navigation/AdminNavigation";

const DesksOverview = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
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

        {/* {buildingsJson !== null ? (
          <TableComponent
            headers={headers}
            data={formatJson(buildingsJson).filter(filterBuilding)}
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
        )} */}
      </div>

      <NewDeskModal
        isOpen={isCreateModalOpen}
        handleClose={() => setCreateModalOpen((value) => !value)}
      />
    </div>
  );
};

export default DesksOverview;
