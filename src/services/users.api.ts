import api from "services";
import { IUser } from "typings";

class UsersApi {
  static async fetchHosts() {
    // const token = localStorage.getItem("token");
    const response = await api.get("/hosts", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
    });

    return response;
  }

  static async fetchUsers() {
    const response = await api.get("/users", {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async getUserDetails({ user_id }) {
    const token = localStorage.getItem("token");

    const response = await api.get(`/users-info?user_id=${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async createUser(data: Omit<IUser, "_id">) {
    const response = await api.post("/users", data, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async updateUser(_id: string, data: Omit<IUser, "_id">) {
    const response = await api.patch(`/users/${_id}`, data, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async deleteUser(_id: string) {
    const response = await api.delete(`/users/${_id}`, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }
}

export default UsersApi;
