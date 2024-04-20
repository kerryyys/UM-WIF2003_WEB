import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/General/Home';
import JobscapeMainPage from './pages/Jobscape/JobscapeMainPage';
import SeekJobPage from "./pages/Jobscape/SeekJobPage";
import SeekTalentPage from "./pages/Jobscape/SeekTalentPage";
import PostProjectPage from "./pages/Jobscape/PostProjectPage";
import ReviewProjectPage from "./pages/Jobscape/ReviewProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JobscapeMainPage" element={<JobscapeMainPage />} />
        <Route path="/SeekJobPage" element={<SeekJobPage />} />
        <Route path="/SeekTalentPage" element={<SeekTalentPage />} />
        <Route path="/PostProjectPage" element={<PostProjectPage />} />
        <Route path="/ReviewProjectPage" element={<ReviewProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
