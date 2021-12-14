class EmployeeService {
  async getBuildings() {
    return fetch(`${process.env.REACT_APP_API_URL}buildings`)
      .then((response) => response.json())
      .then((data) => data);
  }

  async getRooms(buildingId) {
    return fetch(`${process.env.REACT_APP_API_URL}building/${buildingId}/room`)
      .then((response) => response.json())
      .then((data) => data);
  }

  async getDesks(buildingId, roomId) {
    return fetch(
      `${process.env.REACT_APP_API_URL}building/${buildingId}/room/${roomId}/desks`
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  async getDesk(buildingId, roomId, deskId) {
    return fetch(
      `${process.env.REACT_APP_API_URL}building/${buildingId}/room/${roomId}/desks/${deskId}`
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  async getReservations() {
    return fetch(`${process.env.REACT_APP_API_URL}reservations?userId=1`) //Because we dont use authentication default user is 1
      .then((response) => response.json())
      .then((data) => data);
  }

  async makeNewReservation(buildingId, roomId, deskId, startTime, endTime) {
    return fetch(`${process.env.REACT_APP_API_URL}reservations`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        buildingId: buildingId,
        roomId: roomId,
        deskId: deskId,
        startTime: startTime,
        endTime: endTime
      })
    })
      .then((response) => response.json())
      .then((data) => data);
  }
}

export default new EmployeeService();
