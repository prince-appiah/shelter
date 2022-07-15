import AdminApi from "services/admin.api";

export const getDashboardReport = async () => {
  try {
    const response = await AdminApi.getDashboardReport();

    return response;
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};
