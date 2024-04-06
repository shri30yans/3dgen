import React, { Suspense, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Canvas, useLoader } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model({ url }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} />;
}

function ThreeDModel() {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(null);
  const location = useLocation();
  const selectedImage = location.state.selectedImage;

  useEffect(() => {
    const generate3DModel = async () => {
      const response = await axios.get(`http://localhost:5000/generate3D`, {
        params: {
          image: selectedImage
          // removeBackground: true,
          // foregroundRatio: 0.90,
          // resolution: 32
        }
      });
      setModel(response.data);
      setLoading(false);
    };

    generate3DModel();
  }, [selectedImage]);

  return (
    <div>
      <h2>3D model generated</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            <Model url={model} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default ThreeDModel;