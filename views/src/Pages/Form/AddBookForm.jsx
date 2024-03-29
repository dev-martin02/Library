export default function AddBookForm() {
  const url = "http://localhost:2000/addBookForm";
  return (
    <>
      <h1>I'm AddBookForm</h1>
      <form action={url} method="post">
        <label for="author"> Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeHolder="Write author name"
        />
        <label for="bookName"> Book Name </label>
        <input
          type="Text"
          name="bookName"
          id="bookName"
          placeHolder="Write the name of the Book"
        />
        <select name="genre">
          <option value="drama"> Drama </option>
          <option value="action"> Action </option>
          <option value="non-fiction"> Non-fiction</option>
        </select>
        <label for="description">Description </label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          id="description"
          placeHolder="Write a brief Description"
        />
        <button type="submit"> Add</button>
      </form>
    </>
  );
}
