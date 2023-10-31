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
      inputValue: localStorage.getItem("searchValue") || "",
      showResults: false,
    };
  }

  handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const targetValue: string = event.currentTarget.value.trim();
    this.setState({ inputValue: targetValue });
  };

  handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const inputValue = this.state.inputValue.trim();

    if (inputValue !== "") {
      localStorage.setItem("searchValue", inputValue);
      this.setState({ showResults: true });
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
              <form onSubmit={this.handleFormSubmit} className="search-form">
                <input
                  type="text"
                  name="search"
                  id="searchField"
                  placeholder="Search..."
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                />
                <button id="btnSearch" type="submit">
                  Search
                </button>
              </form>
            </div>
          </header>
          {this.state.showResults && <SearchResults />}
        </main>
      </ErrorBoundary>
    );
  }
}
