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
}

export default new AdminService();
