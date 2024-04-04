import { useEffect, useState } from "react";
import "./style/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:2000/";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url); // corrected usage of fetch function
        const data = await response.json(); // extract JSON from the http response
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div id="homeHeader">
        <h1>The Carla's Library</h1>
        <nav>
          <Link to={"/addBookForm"}>Add book</Link>
          <Link to={"/login"}>Login</Link>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </nav>
      </div>
      <div id="body">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <img src="" alt="book picture" />
            <div className="card-content">
              <p>{book.bookName}</p>
              <p>By {book.author}</p>
              <p>Genre: {book.genre} </p>
              <Link to={`/bookInfo/${book._id}`}>See More</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
