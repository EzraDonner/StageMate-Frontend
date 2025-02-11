//not forked defaul file

import api from "../store/api";

const booksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      /**
       * returns array of object:
       * number id
       * string title
       * string author
       * string description
       * string coverimage
       * boolean available
       *  */

      query: () => ({
        url: "/api/books",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;

export default booksApi;
