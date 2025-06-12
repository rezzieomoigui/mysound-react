// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const DummyPage = ({ title }) => (
  <div className="text-center text-purple-400 mt-20 text-4xl">{title} Page</div>
);

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-purple-300 font-y2k">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<DummyPage title="Artists Spotlight" />} />
          <Route path="/discover" element={<DummyPage title="Discover" />} />
          <Route path="/genres" element={<DummyPage title="Genres" />} />
          <Route path="/playlist" element={<DummyPage title="My Playlist" />} />
          <Route path="/account" element={<DummyPage title="Account" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



