import { useState, useEffect } from "react";
import Header from "../features/Header";
import SearchResult from "../features/SearchResult";
import { fetchAllCharacters, searchCharacter } from "../services/fetchAPI";
import { ICharacter } from "../shared/interfaces";

export default function RootLayout() {
  const [data, setData] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchChars = async () => {
    try {
      const res = await fetchAllCharacters();
      if (res !== null && res.results) {
        setData(res.results);
        setLoading(false);
      } else {
        throw new Error("Invalid response from fetch request");
      }
    } catch (err: unknown) {
      setLoading(false);
      throw new Error(`${err}`);
    }
  };

  useEffect(() => {
    fetchChars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    localStorage.setItem("searchTerm", value);
  };

  const searchByTerm = async (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const term: string | null = localStorage.getItem("searchTerm");
    if (!term) {
      fetchChars();
      setNotFound(true);
    } else {
      const response = await searchCharacter(term);
      setData(response.results);
      setLoading(false);
    }
  };

  if (notFound) {
    return <div className="err-message">No Result was found, try again...</div>;
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="search-panel">
        <form className="search-form">
          <input
            type="text"
            name="search"
            id="searchField"
            placeholder="Search..."
            onChange={handlerOnChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchByTerm(event);
              }
            }}
            defaultValue=""
          />
          <button id="btnSearch" type="button" onClick={searchByTerm}>
            Search
          </button>
        </form>
      </div>
      <SearchResult data={data || []} />
    </div>
  );
}
