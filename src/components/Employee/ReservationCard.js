import React from "react";

const ReservationCard = ({ reservation, onClickHandler }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const formatDate = () => {
    const date = new Date(reservation.endTime);
    return `${weekday[date.getDay()]} ${date.getDay()}/${date.getMonth()}`;
  };
  const formatTime = () => {
    const startTime = new Date(reservation.startTime);
    const endTime = new Date(reservation.endTime);
    return `${startTime.getHours()}h${startTime.getMinutes()} - ${endTime.getHours()}h${endTime.getMinutes()}`;
  };

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
          <li className="mb-1">{formatDate()}</li>
          <li>{formatTime()}</li>
          <li>{reservation.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationCard;
