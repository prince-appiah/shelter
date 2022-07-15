import api from "services";
import { IUser } from "typings";

class UsersApi {
  static async fetchUsers() {
    const response = await api.get("/users", {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async createUser(data: Omit<IUser, "_id">) {
    const response = await api.post("/users", data, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }
}

export default UsersApi;
