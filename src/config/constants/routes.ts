export const HOME_ROUTE = "/";
export const LOGIN_ROUTE = "/s/login";
export const SIGNUP_ROUTE = "/s/signup";
export const LISTINGS_ROUTE = "/s/listings";
export const LISTING_DETAILS_ROUTE = "/s/listings/:id";
export const ADMIN_DASHBOARD = "/s/admin/dashboard";
export const HOST_DASHBOARD = "/s/host/dashboard";
export const CUSTOMER_DASHBOARD = "/s/customer/dashboard";

// routes with parameters
export const getListingDetailsRoute = (id: string) => `/s/listings/${id}`;
