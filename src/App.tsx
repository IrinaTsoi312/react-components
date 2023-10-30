import { Component, FormEvent } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import SearchResults from "./features/search-result/SearchResult";
import { IValueState } from "./shared/interfaces";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";

export default class App extends Component<object, IValueState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const targetValue: string = target.value;
    this.setState({ inputValue: targetValue });
  };

  handleFormSubmit = () => {
    const inputValue = this.state.inputValue.trim();

    if (inputValue !== "") {
      localStorage.setItem("searchValue", inputValue);
    }
  };

  render() {
    return (
      <ErrorBoundary>
        <main>
          <header className="header">
            <div className="logo-block">
              <a href="/">
                <img src={Logo} alt="logo" className="logo" />
              </a>
              <p className="logo-name">
                Star Wars movies <span className="sub-logo">wiki</span>
              </p>
            </div>
            <div className="search-panel">
              <div className="search-form">
                <input
                  type="text"
                  name="search"
                  id="searchField"
                  placeholder="Search..."
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                />
                <button
                  id="btnSearch"
                  type="submit"
                  onClick={this.handleFormSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </header>
          <SearchResults />
        </main>
      </ErrorBoundary>
    );
  }
}
