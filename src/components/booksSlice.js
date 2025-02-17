//not forked defaul file

import api from "../store/api";

const musicianApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMusicians: build.query({
      query: () => "/musicians/all",
      providesTags: ["Musicians"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),
  }),
});
export const { useGetMusiciansQuery } = musicianApi;
