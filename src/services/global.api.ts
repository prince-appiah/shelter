import api from "services";

class GlobalApi {
  static async fetchListings() {
    const response = await api.get("/property", {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async getListingDetails(property_id: string) {
    const response = await api.get(`/property/${property_id}`, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async getAllAmenities() {
    try {
      const response = await api.get("/amenities", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getAllPropertyTypes() {
    try {
      const response = await api.get("/room-types", {
        headers: { "Content-Type": "application/json" },
      });
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return error;
    }
  }

  static async deletePropertyType(id: string) {
    const token = localStorage.getItem("token");

    const response = await api.delete(`/room-types/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async deleteProperty(id: string) {
    const token = localStorage.getItem("token");

    const response = await api.delete(`/property/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default GlobalApi;
