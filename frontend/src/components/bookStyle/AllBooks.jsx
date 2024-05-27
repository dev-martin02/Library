import { Link } from "react-router-dom";

export default function AllBooks({ book, index }) {
  return (
    <div className="flex ring-2 ring-slate-900/5 m-1 rounded-md overflow-hidden shadow-xl p-3 items-center md:flex-col">
      <img
        className="h-48 w-full object-scale-down md:h-full md:w-48"
        src={`../../../public/images/${book.imageName}`} //Why has to be in the public folder?
        alt="book picture"
      />
      <div className="p-2 flex flex-col justify-between text-left w-full">
        <div>
          <h2 className="font-semibold text-xl">{book.bookName}</h2>
          <p className=" mb-3">{`by ${book.author}`}</p>

          <Link
            to={`/bookInfo/${book._id}`}
            className="bg-blue-400 rounded-md py-1 px-2 text-white"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
