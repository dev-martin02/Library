import { useParams } from "react-router-dom";

export default function UpdateBookForm() {
  // Find the book
  const { bookId } = useParams();

  async function UpdateForm(event) {
    event.preventDefault();
    const url = `http://localhost:2000/updateBook/${bookId}`;
    const formData = new FormData(event.target);

    // Debugging: Log form data
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const sendData = await fetch(url, {
        method: "PUT",
        body: formData,
      });

      if (sendData.ok) {
        const response = await sendData.json();
        console.log("Success:", response);
      } else {
        console.log("Update failed:", sendData.status, sendData.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <>
      <h1>What Would you like to update?</h1>
      <form onSubmit={UpdateForm}>
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
        <button>Update Content</button>
      </form>
    </>
  );
}
