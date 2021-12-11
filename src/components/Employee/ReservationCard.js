import React from "react";

const ReservationCard = ({ reservation, onClickHandler }) => {
  function formatTime() {
    const date = new Date(reservation.endTime);
    return `${date.getDay()}/${date.getMonth()}`;
  }
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={onClickHandler}
    >
      <div>
        <img
          className="w-full"
          src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Sunset in the mountains"
        />
      </div>

      <div className="px-6 py-4">
        <ul>
          <li>Name: {reservation.name}</li>
          <li>
            TimeSlot:
            {formatTime()}
          </li>
          <li>Location: {reservation.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationCard;
