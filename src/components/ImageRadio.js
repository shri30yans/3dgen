import React from 'react';
import '../styles/imageRadio.css';

function ImageRadio({ image, index, handleImageSelect }) {
  return (
    <div className="image-radio" key={index}>
      <input 
        type="radio" 
        id={`image${index}`} 
        name="image" 
        value={`image${index}`} 
        onChange={handleImageSelect} 
        className="image-radio-input"
      />
      <label htmlFor={`image${index}`} className="image-radio-label">
        <img src={image} alt={`Image ${index + 1}`} className="image-radio-img" />
      </label>
    </div>
  );
}

export default ImageRadio;