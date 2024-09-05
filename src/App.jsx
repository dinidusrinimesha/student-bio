import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentBio from "./components/StudentBio";

import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <Header />
        <Navbar />
        <StudentBio />
      </div>
    </body> 
  );
}

export default App;

