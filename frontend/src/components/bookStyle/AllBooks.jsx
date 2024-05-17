import { Link } from "react-router-dom";

export default function AllBooks({ book, index }) {
  return (
    <div
      className="flex flex-col md:flex-row ring-2 ring-slate-900/5 m-1 rounded-md overflow-hidden shadow-xl md:w-full p-3"
      key={index}
    >
      <img
        className="h-48 w-full object-scale-down md:h-full md:w-48"
        src={`../../../public/images/${book.imageName}`} //Why has to be in the public folder?
        alt="book picture"
      />
      <div className="p-2 flex flex-col justify-between md:flex-1">
        <div>
          <h2 className="font-semibold text-xl">{book.bookName}</h2>
          <p>{`by ${book.author}`}</p>
          <p>Genre ↓</p>
          <ul className="flex space-x-2 mb-3">
            <li className="ring-2 rounded-md px-1">{book.genre}</li>
          </ul>
          <Link
            to={`/bookInfo/${book._id}`}
            className="bg-slate-400 rounded-md py-1 px-2 mt-2"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
