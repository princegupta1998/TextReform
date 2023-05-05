// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textreform from "./Components/Textreform";

function App() {
  const [mode, setmode] = useState("light");
  const toggleBtn = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar adminname="Prince" mode={mode} toggleBtn={toggleBtn} />
      <div className="container my-3"></div>
      <Textreform adminname="Prince" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
