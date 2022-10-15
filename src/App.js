import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import Debaunce from "./components/Debaunce";
const App = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Redux Practice</h1>
        <div className="row">
          <div className="col">
            <Debaunce />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
