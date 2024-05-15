import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllBooks from "../components/bookStyle/AllBooks";

/*
    Task to do in this components
      - Fix UI of the books 
      - Add a desktop design
      - Use a store and add the loading effect      
*/

export default function Home() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:2000/";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-3">
        <h1 className="font-semiBold text-3xl">
          <span className="text-fuchsia-700">Carla's </span>
          <span className="text-blue-500 underline">Library</span>
        </h1>

        <nav className="space-x-4">
          <Link to={"/addBookForm"} className="hover:text-gray-300">
            Add book
          </Link>
          <Link to={"/login"} className="hover:text-gray-300">
            Login
          </Link>
        </nav>
      </div>

      <div id="body">
        {books.map((book, index) => (
          <AllBooks book={book} index={index} />
        ))}
      </div>
    </>
  );
}
