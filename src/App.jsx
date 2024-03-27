import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SwipeScreen from "./components/SwipeScreen";
import CatImage from "./components/CatImage"; // This is the new page that will display the cat image

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cat-image" element={<CatImage />} />
        <Route path="/" element={<SwipeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
