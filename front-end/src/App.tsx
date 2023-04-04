import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState('');

  const handleFileInputChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3000/api/upload', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <div>
        <input type="file" name="file" onChange={handleFileInputChange} />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default App;
