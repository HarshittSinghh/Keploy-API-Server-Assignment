import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ fetchBooks }) => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    publishedYear: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/books', form);
    setForm({ title: '', author: '', genre: '', publishedYear: '' });
    fetchBooks();
  };

  return (
    <>
    <div className='form-wrapper'>
    
    <form onSubmit={handleSubmit}>
        <h2>Add a New Book</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /> <br/>
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required /><br/>
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} /> <br/>
      <input name="publishedYear" placeholder="Year" type="number" value={form.publishedYear} onChange={handleChange} /> <br/>
      <button type="submit">Add Book</button>
    </form>
    </div>
    </>
  );
};

export default BookForm;
