import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddBookForm from "./Pages/Form/AddBookForm";
import DeleteBookForm from "./Pages/Form/DeleteBookForm";
import BookInfo from "./Pages/bookInfo/BookInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBookForm" element={<AddBookForm />} />
        <Route path="/deleteBookForm/:bookName" element={<DeleteBookForm />} />
        <Route path="/bookInfo/:bookId" element={<BookInfo />} />
      </Routes>
    </>
  );
}

export default App;
