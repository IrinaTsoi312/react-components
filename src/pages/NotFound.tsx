import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="notfound-wrapper">
        <h1 className="m-heading">Page Not Found</h1>
        <Link to="/">Return to the main page</Link>
      </div>
    </section>
  );
}
