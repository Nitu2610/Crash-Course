import { useDispatch, useSelector } from 'react-redux';
import { patchMyBookStatus, patchMyBookRating } from '../redux/slices/bookSlice';

export const MyBookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { allBooks } = useSelector((state) => state.books);
  const baseBook = allBooks.find((b) => b._id === book.bookId);

  if (!baseBook) return null; // avoid rendering if missing info

  const handleStatusChange = (e) => {
    dispatch(patchMyBookStatus({ bookId: book.bookId, status: e.target.value }));
  };

  const handleRatingChange = (e) => {
    dispatch(patchMyBookRating({ bookId: book.bookId, rating: Number(e.target.value) }));
  };

  return (
    <div style={{ border: '1px solid #aaa', padding: '1rem', width: '250px' }}>
      <img src={baseBook.coverImage} alt={baseBook.title} style={{ width: '100%' }} />
      <h3>{baseBook.title}</h3>
      <p><em>{baseBook.author}</em></p>

      <div>
        <label>Status:</label>
        <select value={book.status} onChange={handleStatusChange}>
          <option>Want to Read</option>
          <option>Currently Reading</option>
          <option>Read</option>
        </select>
      </div>

      <div>
        <label>Rating:</label>
        <select value={book.rating} onChange={handleRatingChange}>
          {[0, 1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
