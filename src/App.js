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
import FormPage1 from "./pages/FormPage1";
import FormPage2 from "./pages/FormPage2";
import FormPage3 from "./pages/FormPage3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage1 />} />
        <Route path="/form/2" element={<FormPage2 />} />
        <Route path="/form/3" element={<FormPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;

