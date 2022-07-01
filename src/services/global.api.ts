import api from "services";

class GlobalApi {
  static async fetchListings() {
    try {
      const response = await api.get("/property", {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }
  static async getListingDetails(property_id: string) {
    try {
      const response = await api.get(`/property/${property_id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
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
}

export default GlobalApi;
