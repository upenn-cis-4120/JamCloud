import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommentsPage from './components/CommentSection/CommentsPage.tsx';
import TracksPage from './components/TracksPage/TracksPage.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TracksPage />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
