import { useParams } from "react-router-dom";

export default function DeleteBookForm(props) {
  const { bookName, author } = props;
  const { name } = useParams();
  console.log(props);
  const url = "http://localhost:2000/deleteBookForm";
  return (
    <>
      <h1>I'm Delete Book Form</h1>
      <form action={url} method="delete">
        <div>
          <h2>{bookName}</h2>
          <p>{author}</p>
        </div>
        <p>Would you like to delete this books?</p>
        <button type="submit">Yes</button>
      </form>
    </>
  );
}
