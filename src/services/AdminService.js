class AdminService {
  async getBuildings() {
    return this.apiCall("buildings", "GET");
  }
  async removeBuilding(id) {
    return this.apiCall(`admin/building/${id}`, "DELETE");
  }

  async getRooms(buildingId) {
    return this.apiCall(`building/${buildingId}/room`, "GET");
  }

  async createNewBuilding(street, city, postcode, country, name) {
    return this.apiCall(`admin/building`, "POST", {
      street: street,
      city: city,
      postcode: postcode,
      country: country,
      name: name
    });
  }

  async createNewRoom(buildingId, name, type, features, capacity, floor) {
    return this.apiCall(`admin/building/${buildingId}/room`, "POST", {
      roomName: name,
      type: type,
      features: features,
      capacity: parseInt(capacity),
      floor: parseInt(floor)
    });
  }

  async createNewDesk(
    buildingId,
    roomName,
    deskName,
    type,
    features,
    capacity,
    floor
  ) {
    return this.apiCall(
      `admin/building/${buildingId}/room/${roomName}/desks`,
      "POST",
      {
        deskName: deskName,
        type: type,
        features: features,
        capacity: parseInt(capacity),
        floor: parseInt(floor)
      }
    );
  }

  async removeDesk(buildingId, roomName, deskName) {
    return this.apiCall(
      `admin/building/${buildingId}}/room/${roomName}/desks/${deskName}`,
      "DELETE"
    );
  }

  async apiCall(uri, httpVerb, requestBody) {
    const request = new Request(process.env.REACT_APP_API_URL + uri, {
      method: httpVerb,
      headers: {
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

export default new AdminService();
