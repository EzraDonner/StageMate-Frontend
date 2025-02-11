import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/`;
//API documentation: https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/#general-return-schema
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;
