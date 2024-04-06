// pages/print_settings.js
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import '../styles/form.css';

function Print_settings() {
  const [printMaterial, setPrintMaterial] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [heatResistance, setHeatResistance] = useState("");
  const [softness, setSoftness] = useState("");
  const [color, setColor] = useState("");

  const handlePrintMaterialChange = (value) => {
    setPrintMaterial(value);
  };

  const handleFlexibilityChange = (value) => {
    setFlexibility(value);
  };

  const handleHeatResistanceChange = (value) => {
    setHeatResistance(value);
  };

  const handleSoftnessChange = (value) => {
    setSoftness(value);
  };

  const handleColorChange = (value) => {
    setColor(value);
  };

  return (
    <form className="form-page">
      <div className="setting-container">
        <label>
          Select print material:
          <div className="button-group">
            <button onClick={() => handlePrintMaterialChange("material1")}>Material 1</button>
            <button onClick={() => handlePrintMaterialChange("material2")}>Material 2</button>
            <button onClick={() => handlePrintMaterialChange("material3")}>Material 3</button>
            {/* Add more options as needed */}
          </div>
        </label>
      </div>
      <div className="setting-container">
        <label>
          Select flexibility:
          <div className="button-group">
            <button onClick={() => handleFlexibilityChange("flexible")}>Flexible</button>
            <button onClick={() => handleFlexibilityChange("semi-flexible")}>Semi-Flexible</button>
            <button onClick={() => handleFlexibilityChange("rigid")}>Rigid</button>
            {/* Add more options as needed */}
          </div>
        </label>
      </div>
      <div className="setting-container">
        <label>
          Select heat resistance:
          <div className="button-group">
            <button onClick={() => handleHeatResistanceChange("high")}>High</button>
            <button onClick={() => handleHeatResistanceChange("medium")}>Medium</button>
            <button onClick={() => handleHeatResistanceChange("low")}>Low</button>
            {/* Add more options as needed */}
          </div>
        </label>
      </div>
      <div className="setting-container">
        <label>
          Select softness:
          <div className="button-group">
            <button onClick={() => handleSoftnessChange("soft")}>Soft</button>
            <button onClick={() => handleSoftnessChange("medium")}>Medium</button>
            <button onClick={() => handleSoftnessChange("hard")}>Hard</button>
            {/* Add more options as needed */}
          </div>
        </label>
      </div>
      <div className="setting-container">
        <label>
          Select color:
          <div className="color-palette">
            <div className="color-option" style={{ backgroundColor: "red" }} onClick={() => handleColorChange("red")}></div>
            <div className="color-option" style={{ backgroundColor: "blue" }} onClick={() => handleColorChange("blue")}></div>
            <div className="color-option" style={{ backgroundColor: "green" }} onClick={() => handleColorChange("green")}></div>
            {/* Add more color options as needed */}
          </div>
        </label>
      </div>
      <Link to="/3dmodel_gen">Continue with these settings</Link>
    </form>
  );
}

export default Print_settings;