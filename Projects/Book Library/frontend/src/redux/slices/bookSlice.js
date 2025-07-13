// src/redux/slices/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/axios';

// ⬇️ Fetch all books (public)
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await API.get('/books');
  return res.data;
});

// ⬇️ Fetch user's books (private)
export const fetchMyBooks = createAsyncThunk('books/fetchMyBooks', async () => {
  const res = await API.get('/mybooks');
  return res.data;
});

// ⬇️ PATCH reading status
export const patchMyBookStatus = createAsyncThunk(
  'books/patchStatus',
  async ({ bookId, status }) => {
    await API.patch(`/mybooks/${bookId}/status`, { status });
    return { bookId, status };
  }
);

// ⬇️ PATCH book rating
export const patchMyBookRating = createAsyncThunk(
  'books/patchRating',
  async ({ bookId, rating }) => {
    await API.patch(`/mybooks/${bookId}/rating`, { rating });
    return { bookId, rating };
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    allBooks: [],
    myBooks: [],
  },
  reducers: {
    setBooks(state, action) {
      state.allBooks = action.payload;
    },
    setMyBooks(state, action) {
      state.myBooks = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.allBooks = action.payload;
      })
      .addCase(fetchMyBooks.fulfilled, (state, action) => {
        state.myBooks = action.payload;
      })
      .addCase(patchMyBookStatus.fulfilled, (state, action) => {
        const { bookId, status } = action.payload;
        const book = state.myBooks.find((b) => b.bookId === bookId);
        if (book) book.status = status;
      })
      .addCase(patchMyBookRating.fulfilled, (state, action) => {
        const { bookId, rating } = action.payload;
        const book = state.myBooks.find((b) => b.bookId === bookId);
        if (book) book.rating = rating;
      });
  },
});

export const { setBooks, setMyBooks } = bookSlice.actions;
export default bookSlice.reducer;
