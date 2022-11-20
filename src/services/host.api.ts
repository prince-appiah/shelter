import api from "services";

class HostApi {
  static async getDashboardReport() {
    const token = localStorage.getItem("token");
    const response = await api.get("/host-dashboard-reports", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async getHostBookings() {
    const token = localStorage.getItem("token");
    const response = await api.get("/host-bookings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async getHostBookingDetails({ booking_id }) {
    const token = localStorage.getItem("token");
    const response = await api.get(`/host-bookings/${booking_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async editHostProfile(data) {
    const token = localStorage.getItem("token");
    const response = await api.patch("/hosts-profile", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default HostApi;
