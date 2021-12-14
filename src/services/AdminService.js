class AdminService {
  async getBuildings() {
    return fetch(`${process.env.REACT_APP_API_URL}buildings`)
      .then((response) => response.json())
      .then((data) => data);
  }
  async removeBuilding(id) {
    return fetch(`${process.env.REACT_APP_API_URL}admin/building/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  async createNewBuilding(street, city, postcode, country, name) {
    return fetch(`${process.env.REACT_APP_API_URL}admin/building`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        street: street,
        city: city,
        postcode: postcode,
        country: country,
        name: name
      })
    })
      .then((response) => response.json())
      .then((data) => data);
  }
}

export default new AdminService();
