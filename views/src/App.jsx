import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddBookForm from "./Pages/forms/AddBookForm";
import DeleteBookForm from "./Pages/forms/DeleteBookForm";
import BookInfo from "./Pages/bookInfo/BookInfo";
import Login from "./Pages/forms/Login";
import SignIn from "./Pages/forms/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBookForm" element={<AddBookForm />} />
        <Route path="/deleteBookForm/:bookName" element={<DeleteBookForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />

        {/* Add complexity to this line ↓ if book is not in db "would you like to added it?" */}
        <Route path="/bookInfo/:bookId" element={<BookInfo />} />
      </Routes>
    </>
  );
}

export default App;
