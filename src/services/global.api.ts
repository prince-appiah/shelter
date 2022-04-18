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
}

export default GlobalApi;
