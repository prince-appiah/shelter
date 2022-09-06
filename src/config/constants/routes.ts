export const HOME_ROUTE = "/";
export const LOGIN_ROUTE = "/s/login";
export const SIGNUP_ROUTE = "/s/signup";
export const LISTINGS_ROUTE = "/s/listings";
export const LISTING_DETAILS = "/s/listings/:id";

// admin routes
export const ADMIN_DASHBOARD = "/s/admin/dashboard";
export const ADMIN_USERS = "/s/admin/users";
export const ADMIN_LISTINGS = "/s/admin/listings";
export const ADMIN_LISTING_DETAILS = "/s/admin/listings/:id";
export const ADMIN_ROOM_TYPES = "/s/admin/property-types";
export const ADMIN_AMENITIES = "/s/admin/amenities";
export const ADMIN_SETTINGS = "/s/admin/settings";

// host routes
export const HOST_DASHBOARD = "/s/host/dashboard";
export const HOST_LISTINGS = "/s/host/listings";

// customer routes
export const CUSTOMER_DASHBOARD = "/s/customer/dashboard";
export const CUSTOMER_BOOKINGS = "/s/customer/bookings";
export const CUSTOMER_LISTING_DETAILS = "/s/customer/dashboard/listings/:id";
export const CUSTOMER_SETTINGS = "/s/customer/settings";

// routes with parameters
export const getListingDetailsRoute = (id: string) =>
  `${LISTING_DETAILS.replace(":id", id)}`;

export const getAdminListingDetailsRoute = (id: string) =>
  `${ADMIN_LISTING_DETAILS.replace(":id", id)}`;

export const getCustomerListingDetailsRoute = (id: string) =>
  `${CUSTOMER_LISTING_DETAILS.replace(":id", id)}`;
