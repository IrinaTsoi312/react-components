import { Component } from "react";
import "./App.css";
import SearchResults from "./features/search-result/SearchResult";

class App extends Component {
  render() {
    return (
      <div>
        <SearchResults />
      </div>
    );
  }
}

export default App;
