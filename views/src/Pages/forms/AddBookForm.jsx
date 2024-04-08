export default function AddBookForm() {
  const url = "http://localhost:2000/addBookForm";

  return (
    <>
      <h1>I'm AddBookForm</h1>
      <form action={url} method="post" className="flex flex-col m-1 p-2">
        <label for="author"> Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Write author name"
          className=" ring-2 px-1 rounded-sm"
        />
        <label for="bookName"> Book Name </label>
        <input
          type="Text"
          name="bookName"
          id="bookName"
          placeholder="Write the name of the Book"
          className=" ring-2 px-1 rounded-sm"
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
        />

        <button
          type="submit"
          className="ring-1 m-2 rounded-sm w-14 mx-auto hover:bg-sky-600 hover:text-white hover:font-semiBold"
        >
          Add
        </button>
      </form>
    </>
  );
}
