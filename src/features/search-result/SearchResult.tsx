import { Component } from "react";
import "./SearchResult.css";
import { ISearchResultsState } from "../../shared/interfaces";

export default class SearchResults extends Component<
  object,
  ISearchResultsState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      filmData: null,
    };
  }

  componentDidMount() {
    const term = localStorage.getItem("searchValue");
    fetch(`https://swapi.dev/api/films/1/?search=${term}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ filmData: data });
      })
      .catch((error) => {
        throw new Error(`Error fetching data: ${error}`);
      });
  }

  render() {
    const { filmData } = this.state;

    if (!filmData) {
      return <div>Loading...</div>;
    }

    return (
      <section className="search-result-block">
        <div className="film">
          <p className="filmName">
            <span className="title">Title: </span>
            {filmData.title}
          </p>
          <p className="film-release">
            <span className="title">Release Date: </span>
            {filmData.release_date}
          </p>
          <p className="film-director">
            <span className="title">Director: </span>
            {filmData.director}
          </p>
          <p className="film-producers">
            <span className="title">Producer: </span>
            {filmData.producer}
          </p>
          <p className="film-description">
            <span className="title">Description: </span>
            {filmData.opening_crawl}
          </p>
        </div>
      </section>
    );
  }
}
