export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://mighty-wave-63765.herokuapp.com";

export const REGISTER_URL = `${BASE_URL}/auth/register`;
