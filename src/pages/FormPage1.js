// pages/FormPage1.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/form.css';

function FormPage1() {
  const [prompt, setPrompt] = useState("");
  const [betterPrompt, setBetterPrompt] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
    // Here you would call your AI function to process the prompt and set the better prompt
    // For now, I'll just set the better prompt to be the same as the prompt
    setBetterPrompt(event.target.value);
  };

  return (
    <form className="form-page">
      <label>
        Enter a prompt:
        <input type="text" value={prompt} onChange={handlePromptChange} />
      </label>
      {betterPrompt && (
        <div>
          <p>Better prompt: {betterPrompt}</p>
          <Link to="/form/2">Continue with this prompt</Link>
          <br/>
          <Link to="/edit-prompt">Edit the prompt</Link>
        </div>
      )}
    </form>
  );
}

export default FormPage1;