// pages/EditPrompt.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditPrompt() {
  const [editedPrompt, setEditedPrompt] = useState("");

  const handlePromptChange = (event) => {
    setEditedPrompt(event.target.value);
  };

  return (
    <form>
      <label>
        Edit the prompt:
        <input type="text" value={editedPrompt} onChange={handlePromptChange} />
      </label>
      <Link to="/form/2">Continue with this prompt</Link>
    </form>
  );
}

export default EditPrompt;