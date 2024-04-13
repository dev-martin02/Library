import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookPic from "../public/image/atomic.jpg";
import AllBooks from "../../components/bookStyle/AllBooks";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:2000/";

  /*
  Use multer to Upload pictures
  Add a 404 page 
  break down the code to littles components to increase readability  
*/

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url); // corrected usage of fetch function
        const data = await response.json(); // extract JSON from the http response
        setBooks(data);
        setLoading(false);
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
          <a href="#" className="hover:text-gray-300">
            Link
          </a>
          <a href="#" className="hover:text-gray-300">
            Link
          </a>
        </nav>
      </div>
      <div id="body">
        {!loading &&
          books.map((book, index) => <AllBooks book={book} index={index} />)}
        <div className="flex ring-2 ring-slate-900/5 m-1 rounded-md overflow-hidden shadow-xl">
          <img className="h-48 border-none" src={bookPic} alt="book picture" />{" "}
          <div className="p-2">
            <h2 className="font-semibold text-xl">Atomic Habit</h2>
            <p>James Clear</p>
            <p>Genre ↓</p>
            <ul className="flex space-x-2">
              <li className="ring-2 rounded-md px-1">Non-fiction</li>
              <li className="ring-2 rounded-md px-1">Personal Success</li>
            </ul>
            <div className="flex justify-between">
              <div>
                <p>Rating</p>
                <p>4.5 stars</p>
              </div>
              <button className=" bg-slate-400 rounded-md py-1 px-2 mt-2">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
