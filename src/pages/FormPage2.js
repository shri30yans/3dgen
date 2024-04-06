// pages/FormPage2.js
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

function PrintSettings() {
  const [printSetting, setPrintSetting] = useState("");

  const handleSettingChange = (event) => {
    setPrintSetting(event.target.value);
  };

  return (
    <form>
      <label>
        Select print setting:
        <select value={printSetting} onChange={handleSettingChange}>
          <option value="">--Please choose an option--</option>
          <option value="material1">Material 1</option>
          <option value="material2">Material 2</option>
          <option value="material2">Material 3</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <Link to="/form/3">Continue with this setting</Link>
    </form>
  );
}

export default FormPage2;