import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookInfo() {
  const [book, setBook] = useState([]);
  const { bookId } = useParams();
  const navigate = useNavigate();
  console.log(bookId);
  const url = `http://localhost:2000/bookInfo/${bookId}`;

  useEffect(() => {
    async function getOneBook() {
      const response = await fetch(url);
      const data = await response.json();
      setBook(data);
    }
    getOneBook();
  }, []);

  const { author, bookName, description, genre, _id } = book;

  async function deleteBook(id) {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:2000/deleteBook/${id}`, {
        method: "delete",
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <>
      <div>
        <img src="" alt="image book" />
      </div>
      <div>
        <h2>{bookName}</h2>
        <p>{`by ${author}`}</p>
        <p>{`genre ${genre}`}</p>
        <p>{`Description: ${description}`}</p>
      </div>
      <button onClick={() => deleteBook(_id)}>delete</button>
    </>
  );
}
