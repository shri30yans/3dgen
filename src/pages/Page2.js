import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import '../styles/form.css';
import ImageRadio from '../components/ImageRadio.js';
import NextButton from '../components/NextButton.js';

function Image_Gen() {
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const prompt = location.state.prompt;

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const response1 = await axios.get(`http://localhost:5000/generate2D?prompt=${prompt}`);
      const image1 = `data:image/png;base64,${response1.data.image}`;
      setImages([image1, image1,image1, image1]);
      // const response1 = await axios.get(`http://localhost:5000/generate2D?prompt=${prompt}`);
      // const image1 = `data:image/png;base64,${response1.data.image}`;

      // const response2 = await axios.get(`http://localhost:5000/generate2D?prompt=${prompt}`);
      // const image2 = `data:image/png;base64,${response2.data.image}`;

      // const response3 = await axios.get(`http://localhost:5000/generate2D?prompt=${prompt}`);
      // const image3 = `data:image/png;base64,${response3.data.image}`;

      // const response4 = await axios.get(`http://localhost:5000/generate2D?prompt=${prompt}`);
      // const image4 = `data:image/png;base64,${response4.data.image}`;

      // setImages([image1, image2, image3, image4]);
      setLoading(false);
    };

    fetchImages();
  }, [prompt]);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleNextClick = () => {
    navigate('/print_settings', { state: { selectedImage: selectedImage } });
  };

  return (
    <form className="form-page">
      <div>
        <h2>Select an image for 3D model generation:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="image-grid">
            {images.map((image, index) => (
              <ImageRadio key={index} image={image} index={index} handleImageSelect={handleImageSelect} />
            ))}
          </div>
        )}
        <div className="btn-container">
        {selectedImage && 
          <button className="btn-content" onClick={handleNextClick}>
            <NextButton to="/print_settings" />
          </button>}
        </div>
      </div>
    </form>
  );
}

export default Image_Gen;