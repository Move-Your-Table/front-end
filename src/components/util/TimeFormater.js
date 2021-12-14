class TimeFormater {
  weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  formatDate = (startDate) => {
    const date = new Date(startDate);
    return `${this.weekday[date.getDay()]} ${("0" + date.getDay()).slice(
      -2
    )}/${("0" + date.getMonth()).slice(-2)}`;
  };
  formatTime = (startDate, endDate) => {
    const startTime = new Date(startDate);
    const endTime = new Date(endDate);
    return `${startTime.getHours()}h${("0" + startTime.getMinutes()).slice(
      -2
    )} - ${endTime.getHours()}h${("0" + endTime.getMinutes()).slice(-2)}`;
  };
}

export default new TimeFormater();
