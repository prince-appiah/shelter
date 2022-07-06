import api from "services";

class UsersApi {
  static async fetchUsers() {
    const response = await api.get("/users", {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }
}

export default UsersApi;
