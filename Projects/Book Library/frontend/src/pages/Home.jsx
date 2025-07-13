import React ,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from '../components/BookCard';
import booksData from '../mocks/books.json'
import { setBooks } from '../redux/slices/bookSlice';


export const Home = () => {
  const dispatch=useDispatch();
  const {allBooks} =useSelector(state=> state.books);

useEffect(()=>{
  dispatch(setBooks(booksData));
},[dispatch])

if(allBooks.lenght ===0){
  return <p>Loading books ...</p>
}

  return (
    <div>
      <h2>All Books</h2>
      <div style={{display:'flex',flexWrap:'wrap', gap:'1rem'}}>
        {allBooks.map((book)=>(
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
