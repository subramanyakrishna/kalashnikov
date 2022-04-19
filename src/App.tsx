import React from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
