import AdminApi from "services/admin.api";
import HostApi from "services/host.api";

export const getHostDashboardReport = async () => {
  try {
    const response = await HostApi.getDashboardReport();

    return response;
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};
