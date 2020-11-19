// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <p>"I am learning React. My life is getting better. "</p>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));