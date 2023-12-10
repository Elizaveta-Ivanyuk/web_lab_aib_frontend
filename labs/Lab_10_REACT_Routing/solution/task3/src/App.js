import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './Pages/Users';
import User from './Pages/User';

function App() {
  return (
    <Router>
      <div>
        <a href='./user/1'>User 1</a>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;