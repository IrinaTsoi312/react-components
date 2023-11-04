import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header({ onFetch }: { onFetch: () => void }) {
  const handleFetchAllChars = () => {
    onFetch();
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo link to the main page"
            width="70px"
            height="70px"
          />
          <p className="logo-title">
            Rick and Morty <span className="wiki">wiki</span>
          </p>
        </NavLink>
      </div>
      <div className="search-panel">
        <form className="search-form">
          <input
            type="text"
            name="search"
            id="searchField"
            placeholder="Search..."
            value=""
          />
          <button id="btnSearch" type="button" onClick={handleFetchAllChars}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

Header.propTypes = {
  onFetch: PropTypes.func.isRequired,
};
