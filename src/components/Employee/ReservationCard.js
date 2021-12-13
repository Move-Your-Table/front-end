import React from "react";
import TimeFormater from "../util/TimeFormater";

const ReservationCard = ({ reservation, onClickHandler }) => {
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
          <li className="font-bold text-xl mb-2">{reservation.desk.name}</li>
          <li className="mb-1">
            {TimeFormater.formatDate(reservation.startTime)}
          </li>
          <li>
            {TimeFormater.formatTime(
              reservation.startTime,
              reservation.endTime
            )}
          </li>
          <li>{reservation.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationCard;
