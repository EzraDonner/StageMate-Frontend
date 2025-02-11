import api from "../store/api.js";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      /** Returns:
       * user:
       *  > number id,
       *  > string firstname,
       *  > string lastname,
       *  > string email,
       *  string message,
       *  string token - used for future authentication
       */
      query: ({ firstname, lastname, email, password }) => ({
        url: "api/users/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      }),
    }),
    userLogin: build.mutation({
      /** Returns:
       * user:
       *  > number id,
       *  > string firstname,
       *  > string lastname,
       *  > string email,
       *  string message,
       *  string token - used for future authentication
       */
      query: ({ email, password }) => ({
        url: "api/users/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }),
    }),
    getUser: build.query({
      /** Returns:
       * user:
       *  > number id,
       *  > string firstname,
       *  > string lastname,
       *  > string email,
       *  array books - books user has checked out
       */
      query: ({ token }) => ({
        url: "api/users/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useUserLoginMutation,
  useGetUserQuery,
} = userApi;

export default userApi;
