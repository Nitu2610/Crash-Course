import { useDispatch, useSelector } from "react-redux";
import API from "../utils/axios";
import { fetchMyBooks } from "../redux/slices/bookSlice";

export const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { myBooks } = useSelector((state) => state.books); 

  const handleAdd = async () => {
    if (!isAuthenticated) {
      alert("Please login to add books to your library");
      return;
    }

    const alreadyAdded = myBooks.find((b) => b.bookId._id === book._id); // compare MongoDB IDs
    if (alreadyAdded) {
      alert("Book already in your library");
      return;
    }

    try {
      await API.post(`/mybooks/${book.id}`);
      dispatch(fetchMyBooks());
    } catch (err) {
      console.error("Error adding book:", err);
      alert("Failed to add book");
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", width: "250px" }}>
      <img src={book.coverImage} alt={book.title} style={{ width: "100%" }} />
      <h3>{book.title}</h3>
      <p><em>{book.author}</em></p>
      <button onClick={handleAdd}>Want to Read</button>
    </div>
  );
};
