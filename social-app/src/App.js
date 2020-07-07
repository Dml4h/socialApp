import React from "react";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <nav class="shadow-sm navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <span class="navbar-brand">Logo</span>
        <ul class="navbar-nav">
          <li class="navbar-item">
          <a class="nav-link" href="./">thing1</a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="./">thing2</a>
          </li>{" "}
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="shadow p-3  mb-4 bg-dark justify-content-center text-white row row-cols-1">
          Header
        </div>
        <div class="row row-cols-3">
          <div class="col bg-primary">Column1</div>
          <div class="col bg-secondary">Column2</div>
          <div class="col bg-info">Column2</div>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
