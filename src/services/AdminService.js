class AdminService {
  async getBuildings() {
    return this.apiCall("buildings", "GET");
  }
  async removeBuilding(id) {
    return this.apiCall(`admin/building/${id}`, "DELETE");
  }

  async createNewBuilding(street, city, postcode, country, name) {
    return this.apiCall(
      `admin/building`,
      "POST",
      JSON.stringify({
        street: street,
        city: city,
        postcode: postcode,
        country: country,
        name: name
      })
    );
  }

  async createNewRoom(buildingId, name, type, features, capacity, floor) {
    return this.apiCall(
      `admin/building/${buildingId}/room`,
      "POST",
      JSON.stringify({
        name: name,
        type: type,
        features: features,
        capacity: capacity,
        floor: floor
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

export default new AdminService();
