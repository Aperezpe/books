import React, { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label htmlFor='book'>Title</label>
        <input className='input' type='text' name='book' value={title} onChange={handleChange} />
        <button className='button' type='submit'>
          Create!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
