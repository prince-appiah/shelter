export const HOME_ROUTE = "/";
export const LOGIN_ROUTE = "/s/login";
export const SIGNUP_ROUTE = "/s/signup";
export const LISTINGS_ROUTE = "/s/listings";
export const LISTING_DETAILS_ROUTE = "/s/listings/:id";

// admin routes
export const ADMIN_DASHBOARD = "/s/admin/dashboard";
export const ADMIN_USERS = "/s/admin/users";
export const ADMIN_LISTINGS = "/s/admin/listings";
export const ADMIN_ROOM_TYPES = "/s/admin/room-types";
export const ADMIN_AMENITIES = "/s/admin/amenities";
// host routes
export const HOST_DASHBOARD = "/s/host/dashboard";
// customer routes
export const CUSTOMER_DASHBOARD = "/s/customer/dashboard";

// routes with parameters
export const getListingDetailsRoute = (id: string) => `/s/listings/${id}`;
