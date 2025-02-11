import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://localhost:3000/api`;
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;
