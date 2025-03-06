import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books from the backend
  useEffect(() => {
    axios.get("https://bookshelf-backend.onrender.com/api/books") // Updated URL
      .then(response => setBooks(response.data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  // Add a new book
  const addBook = (newBook) => {
    axios.post("https://bookshelf-backend.onrender.com/api/books", newBook) // Updated URL
      .then(response => setBooks([...books, response.data]))
      .catch(error => console.error("Error adding book:", error));
  };

  return (
    <Router>
      <div className="App">
        <h1>Bookshelf Application</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/add" element={<AddBook addBook={addBook} />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>

        {/* Footer Section */}
        <footer>
          <p>
            View on GitHub:{" "}
            <a
              href="https://github.com/ALANxBENNY/bookshelf-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

// BookList Component
function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book._id} className="book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

// AddBook Component
function AddBook({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, description };
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

// BookDetails Component
function BookDetails() {
  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <p>Details about the selected book will be shown here.</p>
    </div>
  );
}

export default App;