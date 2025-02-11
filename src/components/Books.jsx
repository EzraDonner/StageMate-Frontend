/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
//>books >Register >login
//do basic page stuff to test slices/stores/api

import { useGetBooksQuery } from "./booksSlice";
import { useState } from "react";

const TestGetBookQuery = () => {
  const [title, setTitle] = useState("");

  const { data: books, isLoading, error } = useGetBooksQuery();
  console.log(books?.books);
  console.log(books?.books?.at(0));
  //const response = JSON.stringify(books?.books);
  return (
    <div>
      {books?.books?.map((val, index) => {
        return (
          <p key={val.id}>
            {console.log(`${val.title} - ${val.author}`)}
            <img src = {val.coverimage}/>
            {val.title} by {val.author}
            <div>availability: {val.available ?"available":"unavailable"}</div>
            {val.description}
          </p>
        );
      })}
    </div>
  );
};

export default TestGetBookQuery;
