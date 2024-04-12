import React, { useState } from "react";

/*
  TODO: Once the delete is done, re-direct the user to the home page 
    Add a link to go back to Home page 


*/

export default function DeleteBookForm(props) {
  const { bookName, author } = props;
  const [deleted, setDeleted] = useState(false);

  const url = `http://localhost:2000/deleteBookForm/${name}`;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Book successfully deleted");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <h1>I'm Delete Book Form</h1>
      <Link to="/">Home</Link>
      <div>
        <h2>{bookName}</h2>
        <p>{author}</p>
      </div>
      <p>Would you like to delete this book?</p>
      <form onSubmit={handleDelete}></form>
    </>
  );
}
