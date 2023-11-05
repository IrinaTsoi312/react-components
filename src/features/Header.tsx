import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Logo from "../assets/logo.svg";

export default function Header() {
  const errorBoundaryRef = useRef<ErrorBoundary>(null);

  const handleError = () => {
    errorBoundaryRef.current?.triggerError();
    throw new Error("There is an Error");
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
      <button className="btn-error" type="button" onClick={handleError}>
        Error
      </button>
    </header>
  );
}
