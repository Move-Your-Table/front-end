class EmployeeService {
  async getBuildings() {
    return this.apiCall("buildings", "GET");
  }

  async getRooms(buildingId) {
    return this.apiCall(`building/${buildingId}/room`, "GET");
  }

  async getDesks(buildingId, roomId) {
    return this.apiCall(`building/${buildingId}/room/${roomId}/desks`, "GET");
  }

  async getDesk(buildingId, roomId, deskId) {
    return this.apiCall(
      `building/${buildingId}/room/${roomId}/desks/${deskId}`,
      "GET"
    );
  }

  async getReservations() {
    return this.apiCall(`reservations?userId=1`, "GET"); //Because we dont use authentication default user is 1
  }

  async makeNewReservation(buildingId, roomId, deskId, startTime, endTime) {
    return this.apiCall(
      `reservations`,
      "POST",
      JSON.stringify({
        buildingId: buildingId,
        roomId: roomId,
        deskId: deskId,
        startTime: startTime,
        endTime: endTime
      })
    );
  }

  async apiCall(uri, httpVerb, requestBody) {
    const request = new Request(process.env.REACT_APP_API_URL + uri, {
      method: httpVerb,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    return fetch(request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed" + uri);
      })
      .catch(() => {
        throw new Error("Request failed" + uri);
      });
  }
}

export default new EmployeeService();
