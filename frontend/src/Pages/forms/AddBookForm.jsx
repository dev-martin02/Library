import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddBookForm() {
  const [alertMessage, setAlertMessage] = useState(false);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function okMessage() {
    setAlertMessage(true);
    await delay(1800);
    setAlertMessage(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    const url = "http://localhost:2000/addBookForm";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        okMessage();
        console.log("Book sent successfully!");
      } else {
        console.error("Failed to send book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>I'm AddBookForm</h1>
      <Link to={"/"}>Home</Link>
      <form onSubmit={handleSubmit} className="flex flex-col m-1 p-2">
        <label htmlFor="bookName"> Book Name </label>
        <input
          type="Text"
          name="bookName"
          id="bookName"
          placeholder="Write the name of the Book"
          className=" ring-2 px-1 rounded-sm"
          required
        />

        <label htmlFor="author"> Author</label>
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
        {/* If user don't put an image, display an alert message saying "Are you sure that this book don't have an image?"
              yes im sure -> put a broken image 
              no im not sure -> alert message (Please try to put an image, Thanks!)
         */}
        <input type="file" name="bookCover" />

        {/*  Create a button component */}
        <button
          type="submit"
          className="ring-1 m-2 rounded-sm w-14 mx-auto hover:bg-sky-600 hover:text-white hover:font-semiBold"
        >
          Add
        </button>
      </form>

      {alertMessage && (
        <div className="absolute top-0 inset-x-0 flex justify-center mt-4">
          <div className="relative h-16 w-64 bg-gray-100 p-4">
            <div className="absolute inset-x-0 top-0 h-16 bg-blue-200 flex items-center justify-center">
              <p className="font-semibold text-lg">Book was added!!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
