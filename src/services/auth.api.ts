import api from "services";

export type SignupFields = {
  email: string;
  firstname: string;
  lastname: string;
  userType: string;
};

export type LoginFields = {
  email: string;
  otp: string;
};

export type OtpFields = {
  email: string;
};

class AuthApi {
  static async signUp(payload: SignupFields) {
    try {
      const response = await api.post("/signup", payload, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async getOTP(payload: OtpFields) {
    try {
      const response = await api.post("/otp", payload, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async login(payload: LoginFields) {
    try {
      const response = await api.post("/login", payload, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  static async logout(token: string) {
    try {
      const response = await api.post("/logout", null, {
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

export default AuthApi;
