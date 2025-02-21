import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Bookshelf</h1>
      <div className="book-list">
        {books.map(book => (
          <div key={book._id} className="book-card">
            <img src={book.thumbnail} alt={book.title} className="book-thumbnail" />
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">{book.author}</p>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${index < book.rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;