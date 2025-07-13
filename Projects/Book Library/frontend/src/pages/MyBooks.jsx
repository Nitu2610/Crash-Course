import { useSelector } from "react-redux";
import { MyBookCard } from "../components/MyBookCard";

export const MyBooks = () => {
  const {myBooks,allBooks} = useSelector(state=> state.books);

  const userBooksWithInfo=myBooks.map((entry)=> {
    const fullDetails=allBooks.find((b)=> b.id=== entry.bookId);
    return { ...entry, baseBook:fullDetails};
  })

  if(myBooks.length === 0){
    return <p>You haven't added any books  yet.</p>
  }
  return (
    <div>
      <h2>My Books</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
        {userBooksWithInfo.map((book)=>(
          <MyBookCard key={book.bookId} book={book} baseBook={book.baseBook} />
        ))}
      </div>
    </div>
  )
}
