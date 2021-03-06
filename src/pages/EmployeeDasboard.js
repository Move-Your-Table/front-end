import React, { useState, useEffect } from "react";
import ReservationsList from "../components/Employee/ReservationsList";
import NewReservationModal from "../components/modals/NewReservationModal";
import SlideInModal from "../components/modals/SlideInModal";
import EmployeeNavigation from "../components/Navigation/EmployeeNavigation";
import EmployeeService from "../services/EmployeeService";

const EmployeeDasboard = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [reservationsJson, setReservationsJson] = useState(null);

  useEffect(() => {
    EmployeeService.getReservations()
      .then((res) => {
        setReservationsJson(res);
      })
      .catch(() => {
        setReservationsJson([]);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      <EmployeeNavigation />
      <div className="container flex flex-col lg:flex-row gap-10">
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className=" text-xl">Upcomming reservations</h2>
            <button
              className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
              onClick={() => setCreateModalOpen((value) => !value)}
            >
              Create +
            </button>
          </div>

          {reservationsJson && (
            <ReservationsList
              setReservations={setReservationsJson}
              reservations={reservationsJson.filter((item) => {
                return new Date(item.startTime) >= new Date();
              })}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="mb-8 text-xl">Past reservations</h2>
          {reservationsJson && (
            <ReservationsList
              reservations={reservationsJson.filter((item) => {
                return new Date(item.startTime) < new Date();
              })}
            />
          )}
        </div>
      </div>

      <NewReservationModal
        isOpen={isCreateModalOpen}
        handleClose={() => setCreateModalOpen((value) => !value)}
        setReservations={setReservationsJson}
      />
    </div>
  );
};

export default EmployeeDasboard;
