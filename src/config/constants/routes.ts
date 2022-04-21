export const HOME_ROUTE = "/";
export const LOGIN_ROUTE = "/s/login";
export const SIGNUP_ROUTE = "/s/signup";
export const LISTINGS_ROUTE = "/s/listings";
export const LISTING_DETAILS_ROUTE = "/s/listings/:id";
export const ADMIN_DASHBOARD = "/s/admin";
export const HOST_DASHBOARD = "/s/host";
export const CUSTOMER_DASHBOARD = "/s/customer";

// routes with parameters
export const getListingDetailsRoute = (id) => `/s/listings/${id}`;
