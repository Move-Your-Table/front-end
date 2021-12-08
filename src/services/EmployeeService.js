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
}

export default new EmployeeService();
