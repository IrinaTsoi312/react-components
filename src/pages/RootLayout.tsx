import Header from "../features/Header";
import SearchResult from "../features/SearchResult";

export default function RootLayout() {
  return (
    <div className="wrapper">
      <Header />
      <SearchResult />
    </div>
  );
}
