/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
//>books >Register >login
//do basic page stuff to test slices/stores/api

import { useGetMusiciansQuery } from "./booksSlice";
import { useState } from "react";

const TestGetBookQuery = () => {
  const { data: musicians, isLoading, error } = useGetMusiciansQuery();
  const [searchTerm, setSearchTerm] = useState("");
  if (isLoading) {
    return <p>is loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(musicians);
  const filteredMusicians = musicians.filter((musician) =>
    musician.actName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="search musicians"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {filteredMusicians &&
        filteredMusicians.map((musician) => (
          <div key={musician.id}>
            <h1>{musician.actName}</h1>
          </div>
        ))}
    </div>
  );
};

export default TestGetBookQuery;
