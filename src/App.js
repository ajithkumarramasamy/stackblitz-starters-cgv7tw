import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TotalNote from './components/TotalNote';
import Folders from './components/Folders';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (username, password) => {
    setUser(username);
    setPassword(password);
    let data = localStorage.getItem('current');
    console.log(data);
    if (data === null) {
      console.log('un');
      localStorage.setItem('current', JSON.stringify(username));
    } else {
      let res = JSON.parse(localStorage.getItem('current'));
      setUser(res);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/note" exact element={<TotalNote />} />
        <Route path="/folders" exact element={<Folders />} />
        <Route path="/header" exact element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
