import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUser(data); // ✅ Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
  <header className="App-header">
    <h1 className="App-title">User Information</h1>
    <div className="User-grid">
      {user.map((userItem, index) => (
        <div key={index} className="User-card">
          <p><strong>Name:</strong> {userItem.name}</p>
          <p><strong>Email:</strong> {userItem.email}</p>
          <p><strong>Phone:</strong> {userItem.phone}</p>
        </div>
      ))}
    </div>
  </header>
  <footer className="App-footer">
    <p>© 2025 Umar Hassan's App</p>
  </footer>
</div>
  );
}

export default App;
