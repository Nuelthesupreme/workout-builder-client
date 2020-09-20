export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "deployed api link";

export const REGISTER_URL = `${BASE_URL}/auth/register`;
