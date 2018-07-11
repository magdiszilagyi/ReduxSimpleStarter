import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyCBrm8ce4APVNr_A4KBdSxFbtlzRc7IxOY";

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

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
