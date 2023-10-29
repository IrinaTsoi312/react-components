import { Component } from "react";
import Card from "../card/Card";
import { IFilmData } from "../../shared/interfaces";

interface ISearchResultsState {
  filmData: IFilmData | null;
}

class SearchResults extends Component<object, ISearchResultsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      filmData: null,
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films/1/")
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
        <Card
          name={filmData.title}
          date={filmData.release_date}
          director={filmData.director}
          producer={filmData.producer}
          description={filmData.opening_crawl}
        />
      </section>
    );
  }
}

export default SearchResults;
