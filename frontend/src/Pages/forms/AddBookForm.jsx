import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddBookForm() {
  const [sendingBook, setSendingBook] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSendingBook(true); // Start loading

    const formData = new FormData(event.target); // Get form data
    const url = "http://localhost:2000/addBookForm";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Book sent successfully!");
      } else {
        console.error("Failed to send book.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSendingBook(false);
    }
  };

  return (
    <>
      <h1>I'm AddBookForm</h1>
      <Link to={"/"}>Home</Link>
      <form onSubmit={handleSubmit} className="flex flex-col m-1 p-2">
        <label for="bookName"> Book Name </label>
        <input
          type="Text"
          name="bookName"
          id="bookName"
          placeholder="Write the name of the Book"
          className=" ring-2 px-1 rounded-sm"
          required
        />

        <label for="author"> Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Write author name"
          className=" ring-2 px-1 rounded-sm"
          required
        />

        <label htmlFor="genre">Genre</label>
        <select name="genre">
          <option value="drama">Drama</option>
          <option value="action">Action</option>
          <option value="non-fiction">Non-fiction</option>
        </select>

        <label htmlFor="description">Description </label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          id="description"
          placeholder="Write a brief Description"
          className="ring-2 px-1 rounded-sm resize-none"
          required
        />
        <input type="file" name="bookCover" />

        {/*  Create a button component */}
        <button
          type="submit"
          className="ring-1 m-2 rounded-sm w-14 mx-auto hover:bg-sky-600 hover:text-white hover:font-semiBold"
        >
          Add
        </button>
      </form>

      {sendingBook && <p>Processing</p>}
    </>
  );
}
