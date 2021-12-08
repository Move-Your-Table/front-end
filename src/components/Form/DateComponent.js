import React from "react";
import { enableRipple } from "@syncfusion/ej2-base";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateComponent({
  title,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) {
  function changeStartTime(e) {
    const time = new Date(e.value);
    const newTime = new Date(startDate);
    newTime.setHours(time.getHours());
    newTime.setMinutes(time.getMinutes());

    setStartDate(newTime);
  }

  function changeEndTime(e) {
    const newEnd = new Date(startDate);
    const end = new Date(e.value);
    newEnd.setHours(end.getHours());
    newEnd.setMinutes(end.getMinutes());

    console.log(newEnd);
    setEndDate(newEnd);
  }
  function changeDate(e) {
    setStartDate(new Date(e));
  }

  function newStartDate() {
    const temp = new Date(startDate);
    temp.setMinutes(temp.getMinutes() + 30);
    return temp;
  }
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-6">
      <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-sm">
        {title}
      </label>
      <div className="relative">
        <div>
          <DatePicker
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            selected={startDate}
            onChange={changeDate}
          />
        </div>

        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-1 mt-4 text-sm">
          Start Time
        </label>
        <TimePickerComponent
          onChange={changeStartTime}
          min={new Date("08/12/2021 9:00")}
          max={new Date("08/12/2021 16:00")}
        />
        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-1 mt-4 text-sm">
          End Time
        </label>
        <TimePickerComponent
          onChange={changeEndTime}
          min={new Date(newStartDate())}
          max={new Date("08/12/2021 20:00")}
        />
      </div>
    </div>
  );
}

export default DateComponent;
