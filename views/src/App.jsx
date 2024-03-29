import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddBookForm from "./Pages/Form/AddBookForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBookForm" element={<AddBookForm />} />
      </Routes>
    </>
  );
}

export default App;
