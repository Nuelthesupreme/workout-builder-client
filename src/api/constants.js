export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "deployed api link";

export const LOGIN_URL = `${BASE_URL}/auth/login`;
export const SIGNUP_URL = `${BASE_URL}/auth/signup`;
