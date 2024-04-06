import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/form.css';
import NextButton from '../components/NextButton';

function Input_Prompt() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    navigate('/image_gen', { state: { prompt: prompt } });
  };

  return (
    <form className="form-page">
      <h1 className="heading">3D Gen AI Model</h1> {/* Header line in bold */}
      <label className="prompt-input">
        Enter a prompt:
        <input type="text" className="prompt-textbox" value={prompt} onChange={handlePromptChange} defaultValue={"\n"}/>
      </label>

      <div className="btn-container">
        <button className="btn-content" onClick={handleNextClick}>
          <NextButton to="/image_gen" />
        </button>
      </div>
    </form>
  );
}

export default Input_Prompt;