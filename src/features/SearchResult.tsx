import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import { fetchAllCharacters, searchCharacter } from "../services/fetchAPI";
import { ICharacter } from "../shared/interfaces";

export default function SearchResult() {
  const [data, setData] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [chars, setChars] = useState(0);
  const [pages, setPages] = useState(42);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("chars", `${chars}`);
  }, [chars, pages]);

  const fetchChars = async (currentPage: number) => {
    try {
      const res = await fetchAllCharacters(currentPage);
      if (res !== null && res.results) {
        setChars(res.info.count);
        setData(res.results);
        setLoading(false);
        setPages(res.info.pages);
      } else {
        throw new Error("Invalid response from fetch request");
      }
    } catch (err: unknown) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChars(currentPage);
  }, [currentPage]);

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
      fetchChars(currentPage);
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
    <main className="main">
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
      <div className="search-result">
        <div className="content">
          <div className="searchContent">
            {data?.map((item: ICharacter) => {
              return (
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                />
              );
            })}
          </div>
          <Pagination
            fetchChars={fetchChars}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={pages}
          />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
