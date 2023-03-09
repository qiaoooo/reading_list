import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    /* console.log("add a book", title); */
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updateBooks);
  };

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      {/*       {books.length} */}
    </div>
  );
}

export default App;
