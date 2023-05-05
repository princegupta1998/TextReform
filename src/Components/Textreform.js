import React, { useState } from "react";

export default function Textreform(props) {
  //Convet to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Convert to Lowercase
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // To convert it into Sentence case
  const handleScClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };

  // To convert it into Capitalize case
  const handleCtClick = () => {
    let changeText = text.split(" ");

    let newText = changeText
      .map((changeText) => {
        return (
          changeText[0].toUpperCase() + changeText.toLowerCase().substring(1)
        );
      })
      .join(" ");
    setText(newText);
  };

  // Remove Extra Space
  const handlesSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //To copy the content
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // To clear the textarea
  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  //To read the text from the textarea field
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container my-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2 className="my-3">Transform your text {props.adminname}</h2>
        <textarea
          className={`form-control bg-${
            props.mode === "dark" ? "dark" : "light"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter the text"
        ></textarea>
        {/* To uppercase */}
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        {/* To Lowercase */}
        <button className="btn btn-primary my-3 mx-2" onClick={handleLwClick}>
          Convert to LowerCase
        </button>

        {/* To Sentence case */}
        <button className="btn btn-primary my-3" onClick={handleScClick}>
          Convert to Sentence Case
        </button>

        {/* To Capitalize the sentence */}

        <button className="btn btn-primary my-3 mx-2" onClick={handleCtClick}>
          Convert to Capitalize Case
        </button>

        {/* Remove Extra Space */}

        <button className="btn btn-primary my-3" onClick={handlesSpace}>
          Remove Extra Space
        </button>

        {/* To copy the content of textarea */}
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy
        </button>

        {/* To Clear the text field */}
        <button className="btn btn-primary my-3" onClick={handleClClick}>
          Clear
        </button>
      </div>
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>TextReform Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>You can read it in {0.08 * text.split(" ").length} minutes</p>
      </div>
    </>
  );
}
