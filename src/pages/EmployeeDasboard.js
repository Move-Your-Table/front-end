import React, { useState, useEffect } from "react";
import ReservationsList from "../components/Employee/ReservationsList";
import NewReservationModal from "../components/modals/NewReservationModal";
import SlideInModal from "../components/modals/SlideInModal";
import EmployeeNavigation from "../components/Navigation/EmployeeNavigation";
import EmployeeService from "../services/EmployeeService";

const EmployeeDasboard = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [reservationsJson, setReservationsJson] = useState(null);

  //const { error, isPending, data: reservationsJson } = useFetch('http://localhost:8000/blogs')

  useEffect(() => {
    EmployeeService.getReservations().then((res) => {
      setReservationsJson(res);
      console.log(reservationsJson);
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

          <ReservationsList reservations={reservationsJson} />
        </div>
        <div className="flex flex-1 flex-col">
          {/* <h2 className="mb-8 text-xl">Past reservations</h2>
          <UpcommingReservationsList reservations={reservationsJson} /> */}
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
