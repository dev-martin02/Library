import { Link } from "react-router-dom";
export default function AllBooks({ book, index }) {
  return (
    <div
      className="flex ring-2 ring-slate-900/5 m-1 rounded-md overflow-hidden shadow-xl"
      key={index}
    >
      <img className="h-48 border-none" src={book.image} alt="book picture" />
      <div className="p-2">
        <h2 className="font-semibold text-xl">{book.bookName}</h2>
        <p>{`by ${book.author}`}</p>
        <p>Genre ↓</p>
        <ul className="flex space-x-2">
          <li className="ring-2 rounded-md px-1">{book.genre}</li>
        </ul>
        <div className="flex justify-between space-x-28">
          <div>
            <p>Rating</p>
            <p>4.5 stars</p>
          </div>
          <Link
            to={`/bookInfo/${book._id}`}
            className=" bg-slate-400 rounded-md py-1 px-2 mt-2"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
