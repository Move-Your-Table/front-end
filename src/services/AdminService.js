class AdminService {
  async getBuildings() {
    return fetch(`${process.env.REACT_APP_API_URL}buildings`)
      .then((response) => response.json())
      .then((data) => data);
  }
}

export default new AdminService();
