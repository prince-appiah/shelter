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

  static async checkBookedProperty({ property_id }) {
    const token = localStorage.getItem("token");
    const response = await api.get(`/customer-bookings/${property_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async cancelBooking({ property_id }) {
    const token = localStorage.getItem("token");
    const response = await api.patch(
      "/booking-property/cancel",
      { property_id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  }

  static async addBooking({ property_id }: { property_id: string }) {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/booking-property",
      { property_id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  }
}

export default CustomerApi;
