import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BookInfo() {
  const [book, setBook] = useState([]);
  const { bookId } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:2000/bookInfo/${bookId}`;

  useEffect(() => {
    async function getOneBook() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBook(data);
    }
    getOneBook();
  }, []);

  async function deleteBook(id) {
    try {
      const response = await fetch(`http://localhost:2000/deleteBook/${id}`, {
        method: "delete",
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/");
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  const { author, bookName, description, genre, _id, imageName } = book;

  return (
    <div className="max-w-s bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img
        className="w-50 block max-h-64 object-cover mx-auto"
        src={`../../public/images/${imageName}`}
        alt="Book Cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{bookName}</h2>
        <p className="text-sm text-gray-600 mb-2">By {author}</p>
        <p className="text-sm text-gray-600 mb-2">Genre: {genre}</p>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <button
          onClick={() => deleteBook(_id)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Book
        </button>
        <Link
          to={`/updateBook/${_id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-1"
        >
          Update Book
        </Link>
      </div>
    </div>
  );
}
