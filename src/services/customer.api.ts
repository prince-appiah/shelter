import api from "services";

class CustomerApi {
  static async getMyBookings() {
    const token = localStorage.getItem("token");
    const response = await api.get("/customer-bookings", {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default CustomerApi;
