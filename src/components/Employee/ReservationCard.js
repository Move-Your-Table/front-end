import React from "react";

const ReservationCard = ({ reservation }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <ul>
          <li>{reservation.name}</li>
          <li>{reservation.timeSlot}</li>
          <li>{reservation.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationCard;
