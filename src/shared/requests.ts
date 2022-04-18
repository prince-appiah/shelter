const BASE_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const requests = {
  signUp: `${BASE_URL}/signup`,
  fetchListings: `${BASE_URL}/property`,
};

export default requests;
