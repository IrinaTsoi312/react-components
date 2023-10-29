import { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  render() {
    return (
      <div className="search-panel">
        <form className="search-form">
          <input
            type="text"
            name="search"
            id="searchField"
            placeholder="Search..."
            value=""
          />
          <button id="btnSearch" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
