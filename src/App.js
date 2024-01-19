import React from "react";
import "./BackgroundStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Caisse1 from "./Components/Caisse1";
import Login from "./Components/Login";
import "./Components/ComponentStyle.css";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Caisse1 />
      {/* <Login/> */}
    </div>
  );
}

export default App;
