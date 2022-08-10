import { roles } from "config/constants/vars";
import { withProtected } from "shared/routes";

const CustomerDashboard = () => {
  return <p>Customer dashboard</p>;
};

export default withProtected(CustomerDashboard, [roles.customer]);
