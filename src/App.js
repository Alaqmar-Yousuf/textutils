// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6c6e6f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = 'TextUtils is amazing!';
      // }, 1000);
      // setInterval(() => {
      // document.title = 'Download TextUtils now!';
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

//   return (
//     <>
//       <Router>
//         <Navbar
//           title="TextUtil"
//           aboutText="About TextUtils"
//           mode={mode}
//           toggleMode={toggleMode}
//         />

//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             <Route path="/about" element={<About />}/>

//             <Route path="/"
//             element = 
//               {<TextForm
//                 showAlert={showAlert}
//                 heading="Enter the text to analyze below"
//                 mode={mode}
//               />}
//               />
              
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

return (
  <>
    <Navbar
      title="TextUtil"
      aboutText="About TextUtils"
      mode={mode}
      toggleMode={toggleMode}
    />

    <Alert alert={alert} />

    <div className="container my-3">
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      />

      {/* <About /> */}
    </div>
  </>
);
}

export default App;
