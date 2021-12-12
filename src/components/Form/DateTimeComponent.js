import React from "react";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateComponent({ startDate, setStartDate, endDate, setEndDate }) {
  function changeStartTime(e) {
    const newTime = new Date(startDate);
    const time = new Date(e.value);
    newTime.setHours(time.getHours());
    newTime.setMinutes(time.getMinutes());

    setStartDate(newTime);
  }

  function changeEndTime(e) {
    const newEnd = new Date(startDate);
    const end = new Date(e.value);
    newEnd.setHours(end.getHours());
    newEnd.setMinutes(end.getMinutes());
    setEndDate(newEnd);
  }
  function changeDate(e) {
    const newEnd = new Date(new Date(e));
    const end = new Date(endDate);
    newEnd.setHours(end.getHours());
    newEnd.setMinutes(end.getMinutes());
    setEndDate(newEnd);
    setStartDate(new Date(e));
  }

  function newStartDate() {
    const temp = new Date(startDate);
    temp.setMinutes(temp.getMinutes() + 30);
    return temp;
  }
  return (
    <div className="w-full px-3 mb-6 md:mb-0 mt-6 relative flex justify-between">
      <div className="relative">
        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm">
          Date
        </label>
        <DatePicker
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          selected={startDate}
          onChange={changeDate}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm">
          Start Time
        </label>
        <TimePickerComponent
          onChange={changeStartTime}
          value={new Date(startDate)}
          min={new Date("08/12/2021 9:00")}
          max={new Date("08/12/2021 16:00")}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm">
          End Time
        </label>
        <TimePickerComponent
          onChange={changeEndTime}
          value={new Date(endDate)}
          min={new Date(newStartDate())}
          max={new Date("08/12/2021 20:00")}
        />
      </div>
    </div>
  );
}

export default DateComponent;
