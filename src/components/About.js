import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode ==='dark'?'white':'#6c6e6f',
    backgroundColor: props.mode ==='dark'?'rgb(84, 87, 88)':'white',
  }

  ;

  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#6c6e6f'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>About TextUtils</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a simple and efficient text utility application built
              with React. It helps users perform common text operations quickly
              and easily, such as converting text to uppercase or lowercase,
              removing extra spaces, copying text, clearing content, and
              analyzing text statistics like word count, character count, and
              estimated reading time. Designed with a clean, responsive
              interface and support for light and dark modes, TextUtils aims to
              improve productivity while providing a smooth user experience. It
              is an excellent tool for students, writers, developers, and anyone
              who works with text regularly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul className="list-group">
                <li className="list-group-item" style={myStyle}>
                  🚀 Convert text to Uppercase
                </li>
                <li className="list-group-item"style={myStyle}>
                  🔤 Convert text to Lowercase
                </li>
                <li className="list-group-item"style={myStyle}>📋 Copy text to Clipboard</li>
                <li className="list-group-item"style={myStyle}>🗑️ Clear Text</li>
                <li className="list-group-item"style={myStyle}>✂️ Remove Extra Spaces</li>
                <li className="list-group-item"style={myStyle}>📊 Word & Character Counter</li>
                <li className="list-group-item"style={myStyle}>⏱️ Reading Time Estimation</li>
                <li className="list-group-item"style={myStyle}>👀 Live Text Preview</li>
                <li className="list-group-item"style={myStyle}>🌙 Light & Dark Mode</li>
                <li className="list-group-item"style={myStyle}>📱 Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Our Mission</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our mission is to provide a fast, user-friendly, and reliable text
              editing tool that simplifies everyday text processing tasks. We
              strive to create a clean and intuitive experience while
              continuously improving the application with new features and
              modern web technologies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
