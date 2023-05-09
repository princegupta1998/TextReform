import React, { useState } from "react";

export default function Textreform(props) {
  //Convet to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  //Convert to Lowercase
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // To convert it into Sentence case
  const handleScClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to sentence case!", "success");
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
    props.showAlert("Converted to capatalize!", "success");
  };

  // Remove Extra Space
  const handlesSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  //To copy the content
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // To clear the textarea
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        {/* To Lowercase */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleLwClick}
        >
          Convert to LowerCase
        </button>

        {/* To Sentence case */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3"
          onClick={handleScClick}
        >
          Convert to Sentence Case
        </button>

        {/* To Capitalize the sentence */}

        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleCtClick}
        >
          Convert to Capitalize Case
        </button>

        {/* Remove Extra Space */}

        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3"
          onClick={handlesSpace}
        >
          Remove Extra Space
        </button>

        {/* To copy the content of textarea */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleCopy}
        >
          Copy
        </button>

        {/* To Clear the text field */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3"
          onClick={handleClClick}
        >
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
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
      </div>
    </>
  );
}
