import React from 'react';
import axios from 'axios';
import './style.css'; 
import { FaBook } from 'react-icons/fa';

const BookList = ({ fetchBooks, books }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="booklist-container">
      <h2 className="booklist-title"> <FaBook className="logo" style={{fontSize:'25px'}} /> Book List</h2>

      {books.length === 0 ? (
        <p className="no-books">No books found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="book-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre || '-'}</td>
                  <td>{book.publishedYear || '-'}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="update-button"
                      onClick={() => alert('Update functionality not implemented yet')}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
