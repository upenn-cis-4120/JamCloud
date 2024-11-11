import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommentsPage from './components/CommentSection/CommentsPage.tsx';
import TracksPage from './components/TracksPage/TracksPage.tsx';
import DrumsCommensPage from './components/CommentSection/DrumsCommentsPage.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TracksPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/drumcomments" element={<DrumsCommensPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
