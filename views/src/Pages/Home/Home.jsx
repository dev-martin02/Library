import { useEffect, useState } from "react";
import "./style/home.css";

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

  console.log(books);
  return (
    <>
      <div id="homeHeader">
        <h1>The Carla's Library</h1>
        <nav>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </nav>
      </div>

      <div id="body">
        {books.length > 0 &&
          books.map(({ author, bookName }, index) => (
            <div className="card" key={index}>
              <img src="" alt="book picture" />
              <div className="card-content">
                <p>{bookName}</p>
                <p>By {author}</p>
                <p>Genre: Action, Fiction </p>
                <button>See More</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
