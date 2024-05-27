import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddBookForm from "./Pages/forms/AddBookForm";
import BookInfo from "./Pages/bookInfo/BookInfo";
import Login from "./Pages/forms/Login";
import SignIn from "./Pages/forms/SignIn";
import NotFound from "./Pages/NotFound";
import UpdateBookForm from "./Pages/forms/UpdateBookForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBookForm" element={<AddBookForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />

        {/* Add complexity to this line ↓ if book is not in db "would you like to added it?" */}
        <Route path="/bookInfo/:bookId" element={<BookInfo />} />
        <Route path="/updateBook/:bookId" element={<UpdateBookForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
