import PropTypes from "prop-types";
import { ICharacter, ISearchResultProps } from "../shared/interfaces";

export default function SearchResult({ data }: ISearchResultProps) {
  return (
    <main className="main">
      <div className="searchContent">
        {data.map((item: ICharacter) => {
          return (
            <div className="char" key={item.id}>
              <div
                className="char-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="char-data">
                <p className="char-info">
                  <span className="title">Name: </span>
                  {item.name}
                </p>
                <p className="char-info">
                  <span className="title">Status: </span>
                  {item.status}
                </p>
                <p className="char-info">
                  <span className="title">Species: </span>
                  {item.species}
                </p>
                <p className="char-info">
                  <span className="title">Gender: </span>
                  {item.gender}
                </p>
                <p className="char-info">
                  <span className="title">Origin: </span>
                  {item.origin.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

SearchResult.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
    })
  ).isRequired,
};
