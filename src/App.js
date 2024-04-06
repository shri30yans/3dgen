// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input_Prompt from "./pages/Page1";
import Image_gen from "./pages/Page2";
import Print_settings from "./pages/Page3";
import ThreeDModel_gen from "./pages/Page4";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input_Prompt />} />
        <Route path="/image_gen" element={<Image_gen />} />
        <Route path="/print_settings" element={<Print_settings />} />
        <Route path="/3dmodel_gen" element={<ThreeDModel_gen />} />
      </Routes>
    </Router>
  );
}

export default App;

