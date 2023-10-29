import { Component } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import SearchResults from "./features/search-result/SearchResult";
import SearchPanel from "./features/search-panel/SearchPanel";

class App extends Component {
  render() {
    return (
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
        </header>
        <SearchPanel />
        <SearchResults />
      </main>
    );
  }
}

export default App;
