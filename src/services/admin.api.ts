import api from "services";
import { IAmenity, IHost, IProperty, IPropertyType } from "typings";

export type PropertyFields = {
  readonly _id: string;
  owner: string;
  name: string;
  referenceNo: string;
  roomType: string;
  price: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  description: string;
  location: string;
  stayPeriod: "night" | "week" | "month" | "year" | string;
  images: any;
  amenities: string[];
  isApproved?: boolean;
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

  static async createListing(data: Omit<PropertyFields, "_id">) {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("price", data.price);
    formData.append("stayPeriod", data.stayPeriod);
    formData.append("roomType", data.roomType);
    formData.append("owner", data.owner);
    formData.append("numOfBathrooms", data.numOfBathrooms.toString());
    formData.append("numOfBedrooms", data.numOfBedrooms.toString());
    formData.append("referenceNo", data.referenceNo);

    for (const amenity of data.amenities) {
      formData.append("amenities", amenity);
    }

    for (const img of data.images) {
      formData.append("images", img);
    }

    const response = await api.post("/property", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  static async approveListing({
    property_id,
    isApproved,
  }: {
    property_id: string;
    isApproved: string;
  }) {
    const token = localStorage.getItem("token");

    const response = await api.patch(
      `/approve?property_id=${property_id}`,
      { isApproved },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  }

  static async addAmenity(data: Omit<AmenityFields, "_id">) {
    const token = localStorage.getItem("token");
    const response = await api.post("/amenities", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
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

  static async getAllBookings() {
    const token = localStorage.getItem("token");
    const response = await api.get("/bookings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default AdminApi;
