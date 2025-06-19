import React, { useState } from "react";
import axios from "axios";
import "./style.css"; 

const BookForm = ({ fetchBooks }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/books", form);
    setForm({ title: "", author: "", genre: "", publishedYear: "" });
    fetchBooks();
  };

  return (
    <div className="form-wrapper">
      <div className="form-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/382/400/non_2x/two-people-interacting-in-school-library-free-vector.jpg"
          alt="Books"
        />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Add a New Book</h2>
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            required
          />
          <input
            name="genre"
            placeholder="Genre"
            value={form.genre}
            onChange={handleChange}
          />
          <input
            name="publishedYear"
            placeholder="Year"
            type="number"
            value={form.publishedYear}
            onChange={handleChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
