import { Component } from "react";
import "./SearchResult.css";
import { ISearchResultsState, IFilmList } from "../../shared/interfaces";
import Card from "../card/Card";

interface SearchResultsProps {
  filmData: IFilmList | null;
}

export default class SearchResults extends Component<
  SearchResultsProps,
  ISearchResultsState
> {
  render() {
    const { filmData } = this.props;

    if (!filmData) {
      return <div>Loading...</div>;
    }

    return (
      <section className="search-result-block">
        {filmData.results.map((film, index) => (
          <Card
            key={index}
            name={film.title}
            date={film.release_date}
            director={film.director}
            producer={film.producer}
            description={film.opening_crawl}
          />
        ))}
      </section>
    );
  }
}
