import api from "services";
import { IPropertyType } from "typings";

export type PropertyFields = {
  readonly _id: string;
  owner: string;
  name: string;
  roomType: string;
  price: number;
  description: string;
  location: string;
  stayPeriod: string;
  images: string[];
  amenities: string[];
};

export type HostFields = {
  readonly _id: string;
  user_id: string;
  firstname: string;
  lastname: string;
  email: string;
  profilePicture: string;
  isVerified: boolean;
  phone: string;
  properties: string[];
};

export type RoomTypeFields = {
  _id: string;
  name: string;
  icon: string;
};

export type AmenityFields = {
  _id: string;
  name: string;
  icon: string;
};

class AdminApi {
  static async getDashboardReport() {
    const response = await api.get("/dashboard-reports", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }

  static async getAllProperties() {
    try {
      const response = await api.get("/property", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getProperty(id: string) {
    try {
      const response = await api.get(`/property/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async addProperty(token: string, data: PropertyFields) {
    try {
      const response = await api.post("/property", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async editProperty(token: string, id: string, data: PropertyFields) {
    try {
      const response = await api.patch(`/property/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteProperty(token: string, id: string) {
    try {
      const response = await api.delete(`/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getAllHosts() {
    try {
      const response = await api.get("/hosts", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getHost(id: string) {
    try {
      const response = await api.get(`/hosts/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async addHost(token: string, data: HostFields) {
    try {
      const response = await api.post("/hosts", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async editHost(token: string, id: string, data: HostFields) {
    try {
      const response = await api.patch(`/hosts/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteHost(token: string, id: string) {
    try {
      const response = await api.delete(`/hosts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getAllRoomTypes() {
    try {
      const response = await api.get("/room-types", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getRoomType(id: string) {
    try {
      const response = await api.get(`/room-types/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async addPropertyType(data: Omit<IPropertyType, "_id">) {
    try {
      const token = localStorage.getItem("token");

      const response = await api.post("/room-types", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async editPropertyType(_id: string, data: IPropertyType) {
    const token = localStorage.getItem("token");

    const response = await api.patch(`/room-types/${_id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async deleteRoomType(token: string, id: string) {
    try {
      const response = await api.delete(`/room-types/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getAmenity(id: string) {
    try {
      const response = await api.get(`/amenities/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async addAmenity(data: Omit<AmenityFields, "_id">) {
    try {
      const token = localStorage.getItem("token");

      const response = await api.post("/amenities", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async editAmenity(_id: string, data: AmenityFields) {
    try {
      const token = localStorage.getItem("token");

      const response = await api.patch(`/amenities/${_id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteAmenity(token: string, id: string) {
    try {
      const response = await api.delete(`/amenities/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}

export default AdminApi;
