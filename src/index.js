import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";

const API_KEY = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, data => {
      this.setState({ videos: data });
      //ES6 , (videos) => {this.setState ({videos})}
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, //instance
  document.querySelector(".container")
);
