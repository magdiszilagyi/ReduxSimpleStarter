import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCBrm8ce4APVNr_A4KBdSxFbtlzRc7IxOY";

// create a new component. This component should pproduce some HTML

const App = () => {
  //class
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(
  <App />, //instance
  document.querySelector(".container")
);
