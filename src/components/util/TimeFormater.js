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
    return `${this.weekday[date.getDay()]} ${date.getDay()}/${date.getMonth()}`;
  };
  formatTime = (startDate, endDate) => {
    const startTime = new Date(startDate);
    const endTime = new Date(endDate);
    return `${startTime.getHours()}h${startTime.getMinutes()} - ${endTime.getHours()}h${endTime.getMinutes()}`;
  };
}

export default new TimeFormater();
