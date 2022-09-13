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
    const response = await api.post("/signup", payload, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }

  static async getOTP({ email }: OtpFields) {
    const response = await api.post(
      "/otp",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );

    return response;
  }

  static async login({ email, otp }: LoginFields) {
    const response = await api.post(
      "/login",
      { email, otp },
      { headers: { "Content-Type": "application/json" } }
    );

    return response;
  }

  static async logout() {
    const token = localStorage.getItem("token");

    const response = await api.get("/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default AuthApi;
