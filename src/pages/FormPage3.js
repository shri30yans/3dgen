// pages/FormPage1.js
// pages/ImageSelection.js
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

function ImageSelection() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div>
      <h2>Select an image for 3D model generation:</h2>
      <div>
        <input type="radio" id="image1" name="image" value="image1" onChange={handleImageSelect} />
        <label htmlFor="image1">
          <img src="path_to_image1" alt="Image 1" />
        </label>
      </div>
      <div>
        <input type="radio" id="image2" name="image" value="image2" onChange={handleImageSelect} />
        <label htmlFor="image2">
          <img src="path_to_image2" alt="Image 2" />
        </label>
      </div>
      {/* Add more images as needed */}
      {selectedImage && <Link to="/form/4">Continue with this image</Link>}
    </div>
  );
}

export default FormPage3;